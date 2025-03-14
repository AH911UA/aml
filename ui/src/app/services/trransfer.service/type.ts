export type ChainName = "polygon" | 'erc' | 'bnb' | string;

export interface ChainData {
    chainId: string;
    chainName: string;
    chainRequestSumbol: ChainName;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    },
    rpcUrls: [string];
    blockExplorerUrls: [string];
    additionalTokens: string[];
}

export type ConnectType = 'metaMask' | 'trustWallet' | 'walletConnect';

export interface BalanceResponce {
    id: number;
    jsonrpc: '2.0';
    result?: {
        assets: {
            balance: string;
            balanceUsd: string;
            blockchain: ChainName;
            holderAddress: string;
            tokenDecimals: number;
            tokenSymbol: "POL" | "SOL" | "BNB" | "ETH" | "USDT" | string;
            contractAddress?: string;
        }[];
    };
    error?: {}
}


export interface ParsedBalance {
    chainName: string;
    sum: number;
    chainToken: {
        balance: string;
        decimal: number;
    }
    USDT?: {
        address: string;
        decimal: number;
        balance: string;
    }
}

export type USDTSumbol = 'USDT';