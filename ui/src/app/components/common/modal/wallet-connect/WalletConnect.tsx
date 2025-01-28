/** @format */

import { ImageType } from '@app/types/image.type';
import './WalletConnect.scss';
import { useState } from 'react';

interface iWallet {
    label: string;
    icon: any;
    url: string;
}

export default function WalletConnect({ handlerClose }: { handlerClose: Function }) {
    const qrLink =
        'wc:97f68f7be0c561ce7b1eb53b0a7eecfa882fd68f3aa9cb7c231287ad62503663@2?relay-protocol=irn&symKey=a7301134b1b89a5da70024be1c6e77b38a03adb208a1f871b285c2604fa4bfe8';
    const wallets: iWallet[] = [
        {
            label: 'Zerion',
            icon: ImageType.WALLET_ZERION,
            url: 'https://app.zerion.io/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        { label: 'Ledger', icon: ImageType.WALLET_LEDGER, url: '' },
        {
            label: 'Fireblocks',
            icon: ImageType.WALLET_FIREBLOCKS,
            url: 'https://console.fireblocks.io/v2/wc?uri=wc%3Af383fd99a8778fafb2d071dc2dc53a998a1b36e13b9f802a48821fe880dcce11%402%3Frelay-protocol%3Dirn%26symKey%3Dc0cec0add5c8d0b12c85fcab58ac3e14b9d4788fd3e0913c85e55df8d5530275',
        },
        {
            label: 'Ambire',
            icon: ImageType.WALLET_AMBIRE,
            url: 'https://wallet.ambire.com/#/add-account',
        },
        {
            label: 'Infinity',
            icon: ImageType.WALLET_INFINITY,
            url: 'https://infinitywallet.io/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        {
            label: 'Internet',
            icon: ImageType.WALLET_INTERNET,
            url: 'https://internetmoney.io/wc?uri=wc%3Af383fd99a8778fafb2d071dc2dc53a998a1b36e13b9f802a48821fe880dcce11%402%3Frelay-protocol%3Dirn%26symKey%3Dc0cec0add5c8d0b12c85fcab58ac3e14b9d4788fd3e0913c85e55df8d5530275',
        },
        { label: 'NOW', icon: ImageType.WALLET_NOW, url: 'https://walletnow.app/' },
        {
            label: 'Certhis',
            icon: ImageType.WALLET_CERTHIS,
            url: 'https://certhis.io/wc?uri=wc%3Af383fd99a8778fafb2d071dc2dc53a998a1b36e13b9f802a48821fe880dcce11%402%3Frelay-protocol%3Dirn%26symKey%3Dc0cec0add5c8d0b12c85fcab58ac3e14b9d4788fd3e0913c85e55df8d5530275',
        },
        { label: 'Cypherock', icon: ImageType.WALLET_CYPHEROCK, url: '' },
        {
            label: 'Sahal',
            icon: ImageType.WALLET_SAHAL,
            url: 'https://sahalwallet.app/',
        },
        { label: 'BC', icon: ImageType.WALLET_BC, url: '' },
        { label: 'Neon', icon: ImageType.WALLET_NEON, url: '' },
        {
            label: 'Absolute',
            icon: ImageType.WALLET_ABSOLUTE,
            url: 'https://t.me/AbsoluteWalletBot/wc?uri=wc%3Af383fd99a8778fafb2d071dc2dc53a998a1b36e13b9f802a48821fe880dcce11%402%3Frelay-protocol%3Dirn%26symKey%3Dc0cec0add5c8d0b12c85fcab58ac3e14b9d4788fd3e0913c85e55df8d5530275',
        },
        {
            label: 'Sequence',
            icon: ImageType.WALLET_SEQUENCE,
            url: 'https://sequence.app/geo-blocked?uri=wc%3A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%402%3Frelay-protocol%3Dirn%26symKey%3D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        {
            label: 'Marble',
            icon: ImageType.WALLET_MARBLE,
            url: 'https://app.marblewallet.com/wc?uri=wc%3A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%402%3Frelay-protocol%3Dirn%26symKey%3D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        {
            label: 'Flooz',
            icon: ImageType.WALLET_FLOOZ,
            url: 'https://wallet.flooz.trade/wc?uri=wc%3A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%402%3Frelay-protocol%3Dirn%26symKey%3D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        {
            label: 'Crossmint',
            icon: ImageType.WALLET_CROSSMINT,
            url: 'https://www.crossmint.com/signin?callbackUrl=https%3A%2F%2Fwww.crossmint.com%2Fwc%3Furi%3Dwc%253A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%25402%253Frelay-protocol%253Dirn%2526symKey%253D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        {
            label: 'Torus',
            icon: ImageType.WALLET_TORUS,
            url: 'https://app.tor.us/wc?uri=wc%3A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%402%3Frelay-protocol%3Dirn%26symKey%3D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        {
            label: 'Paper',
            icon: ImageType.WALLET_PAPER,
            url: 'https://withpaper.com/wallet?uri=wc%3A22b74dfa9a853f890c14e35f3a0826ab99ae10a2b73f259324e9cc32814b15ec%402%3Frelay-protocol%3Dirn%26symKey%3D290f813af334b1917251d8e68b3b695d197b7849619572c788917e46da5a8097',
        },
        { label: 'Feral', icon: ImageType.WALLET_FERAL, url: '' },
        { label: 'Nufinetes', icon: ImageType.WALLET_NUFINETES, url: '' },
        {
            label: 'OneKey',
            icon: ImageType.WALLET_ONEKEY,
            url: 'https://app.onekey.so/wc/connect/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        {
            label: 'Venly',
            icon: ImageType.WALLET_VENLY,
            url: 'https://walletconnect.venly.io/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'Bitski',
            icon: ImageType.WALLET_BITSKI,
            url: 'https://chromewebstore.google.com/detail/bitski/feejiigddaafeojfddjjlmfkabimkell?uri=wc:5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9@2?relay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'Stickey',
            icon: ImageType.WALLET_STICKEY,
            url: 'https://stickeyapp.page.link/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        { label: 'CoinStats', icon: ImageType.WALLET_COINSTATS, url: '' },
        { label: 'KeepKey', icon: ImageType.WALLET_KEEPKEY, url: '' },
        {
            label: 'meta-WON...',
            icon: ImageType.WALLET_META_WON,
            url: 'https://metawonderverse.custonomy.io/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'Okto',
            icon: ImageType.WALLET_OKTO,
            url: 'https://www.okto.tech/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        { label: 'Zelcore', icon: ImageType.WALLET_ZELCORE, url: '' },
        {
            label: 'GateWeb3',
            icon: ImageType.WALLET_GATEWEB3,
            url: 'https://www.gateweb3.net/uk/web3?uri=wc%3Aa408d8ad249587df12be74272855fcd8d678765e2ca00f36f66ed7536416b042%402%3Frelay-protocol%3Dirn%26symKey%3D4ea1177b56b3d849dce7519fcd91da671966488e65194d336daf6fb5dff11a21',
        },
        { label: 'UTORG', icon: ImageType.WALLET_UTORG, url: '' },
        { label: 'CoinWallet', icon: ImageType.WALLET_COIN, url: '' },
        { label: 'MUZA', icon: ImageType.WALLET_MUZA, url: '' },
        {
            label: 'Sequel',
            icon: ImageType.WALLET_SEQUEL,
            url: 'https://app.sequelfi.com/',
        },
        { label: 'MetaWallet', icon: ImageType.WALLET_META, url: '' },
        {
            label: 'NuFi',
            icon: ImageType.WALLET_NUFI,
            url: 'https://wallet.nu.fi/wallet_connect/connector/redirect/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'Solace',
            icon: ImageType.WALLET_SOLACE,
            url: 'https://wallet.solaceprotocol.com/home',
        },
        {
            label: 'Meter',
            icon: ImageType.WALLET_METER,
            url: 'https://wallet.meter.io/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'DMToken',
            icon: ImageType.WALLET_DMTOKEN,
            url: 'https://defim.site/wc?uri=wc%3A5194648cb5a3d6046a5d882bac4b45af1f26aa2e2ea2dca7f44926f17012b5b9%402%3Frelay-protocol%3Dirn%26symKey%3Dd3f22b0f9d3ab543c5e26bd57f68ec14176ce104cc6f4b31c0f584fee5529cef',
        },
        {
            label: 'Lode',
            icon: ImageType.WALLET_LODE,
            url: 'https://lodewallet.com/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'campux.digital',
            icon: ImageType.WALLET_CAMPUX,
            url: 'https://campux.digital/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'UniPass',
            icon: ImageType.WALLET_UNIPASS,
            url: 'https://wallet.unipass.id/login',
        },
        {
            label: 'GoodDollar',
            icon: ImageType.WALLET_GOODDOLAR,
            url: 'https://wallet.gooddollar.org/wc?uri=wc%3Aa408d8ad249587df12be74272855fcd8d678765e2ca00f36f66ed7536416b042%402%3Frelay-protocol%3Dirn%26symKey%3D4ea1177b56b3d849dce7519fcd91da671966488e65194d336daf6fb5dff11a21',
        },
        {
            label: 'Hellō',
            icon: ImageType.WALLET_HELLO,
            url: 'https://wallet.hello.coop/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'Deficloud',
            icon: ImageType.WALLET_DEFICLOUD,
            url: 'http://ww25.app.deficloud.cc/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745&subid1=20240701-1958-52d5-8952-a51aba6683ca',
        },
        { label: 'Gamic', icon: ImageType.WALLET_GAMIC, url: '' },
        {
            label: 'DS',
            icon: ImageType.WALLET_DC,
            url: 'https://www.coinbase.com/wallet/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'thirdweb',
            icon: ImageType.WALLET_THIRDWEB,
            url: 'https://ews.thirdweb.com/wallet?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'Oisy',
            icon: ImageType.WALLET_OISY,
            url: 'https://oisy.com/wc/?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'LichtBit',
            icon: ImageType.WALLET_LICHTBIT,
            url: 'https://scan.lichtbit.net/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        { label: 'Roam', icon: ImageType.WALLET_ROAM, url: '' },
        {
            label: 'My',
            icon: ImageType.WALLET_MY,
            url: 'https://www.mycloudwallet.com/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: '3mint',
            icon: ImageType.WALLET_3MINT,
            url: 'https://app.3mint.io/wallet/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'MELDapp',
            icon: ImageType.WALLET_MELD,
            url: 'https://app.meld.com/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        { label: 'HyperPay', icon: ImageType.WALLET_HYPER, url: '' },
        {
            label: 'AT.Wallet',
            icon: ImageType.WALLET_AT,
            url: 'https://apps.apple.com/us/app/at-wallet/id1490097962?mt=12/wc?uri=wc%3A8074c34247be736d0a122dc1993e3b857aac56b9bb832d406b22eb8c45939f4d%402%3Frelay-protocol%3Dirn%26symKey%3Dbfed0cc2de3bf84485489e3d081df8b7c7e5a498f23168cc041ca8d8630e00fd',
        },
        {
            label: 'Numo',
            icon: ImageType.WALLET_NUMO,
            url: 'https://vercel.numo.xyz/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'Multix',
            icon: ImageType.WALLET_MULTIX,
            url: 'https://multix.chainsafe.io/wc?uri=wc%3Ac6f6e9d3521fa3768fbe735bf5e1eb26b51815444e0b6bf01a4ea366647855cf%402%3Frelay-protocol%3Dirn%26symKey%3Dda75fe96adc368550a3ddf0caf4f571dcbe032424878c9ace283c90aa27eb745',
        },
        {
            label: 'Hoo!Wallet',
            icon: ImageType.WALLET_HOO,
            url: 'https://hwallet.digital/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        { label: 'Nova', icon: ImageType.WALLET_NOVA, url: '' },
        {
            label: 'GateWallet',
            icon: ImageType.WALLET_GATE,
            url: 'https://www.gateex.cc/web3/wc?uri=wc%3A8074c34247be736d0a122dc1993e3b857aac56b9bb832d406b22eb8c45939f4d%402%3Frelay-protocol%3Dirn%26symKey%3Dbfed0cc2de3bf84485489e3d081df8b7c7e5a498f23168cc041ca8d8630e00fd',
        },
        {
            label: 'Puzzle',
            icon: ImageType.WALLET_PUZZLE,
            url: 'https://walletconnect.puzzle.online/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'SmartRush',
            icon: ImageType.WALLET_SMARTRUSH,
            url: 'https://www.smartmoneyrush.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Bitwinex',
            icon: ImageType.WALLET_BITWINEX,
            url: 'https://bitcuit.com/login/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Blanq',
            icon: ImageType.WALLET_BLANQ,
            url: 'https://wallet.blanq.app/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Levain',
            icon: ImageType.WALLET_LEVAIN,
            url: 'https://app.levain.tech/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'KAX-Wallet',
            icon: ImageType.WALLET_KAX,
            url: 'https://link.kaxaa.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Facewallet',
            icon: ImageType.WALLET_FACE,
            url: 'https://my.facewallet.xyz/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'JoyID',
            icon: ImageType.WALLET_JOYID,
            url: 'https://app.joy.id/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: '37x',
            icon: ImageType.WALLET_37X,
            url: 'https://37xdubai.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Rovi',
            icon: ImageType.WALLET_ROVI,
            url: 'https://rovi.money/app/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        { label: 'Wallacy', icon: ImageType.WALLET_WALLACY, url: '' },
        {
            label: 'Capsule',
            icon: ImageType.WALLET_CAPSULE,
            url: 'https://walletconnect.usecapsule.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'ShimmerSea',
            icon: ImageType.WALLET_SHIMMERSEA,
            url: 'https://app.magicsea.finance/',
        },
        {
            label: 'ShapeShift',
            icon: ImageType.WALLET_SHAPESHIFT,
            url: 'https://app.shapeshift.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'CyberWallet',
            icon: ImageType.WALLET_CYBER,
            url: 'https://wallet.cyber.co/apps?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'DexTrade',
            icon: ImageType.WALLET_DEXTRADE,
            url: 'https://pwa.dextrade.com/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'HashPack',
            icon: ImageType.WALLET_HASHPACK,
            url: 'https://link.hashpack.app/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Blade',
            icon: ImageType.WALLET_BLADE,
            url: 'https://welcome.bladewallet.io/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        {
            label: 'Keychain',
            icon: ImageType.WALLET_KEYCHAIN,
            url: 'https://www.app.keychain.money/wc?uri=wc%3A05c7aa97dc31fe0fa131a6b46d7d6354be4e625d3b19fafcf6ff9c5601a605f5%402%3Frelay-protocol%3Dirn%26symKey%3D201d77f9693b2d0276919bc5ae535a4759a647e38702fd86347c40bb235409a0',
        },
        { label: 'DreamOS', icon: ImageType.WALLET_DREAM, url: '' },
        { label: 'MPCVault', icon: ImageType.WALLET_MPCVAULT, url: '' },
        {
            label: 'Clave',
            icon: ImageType.WALLET_CLAVE,
            url: 'https://getclave.io/link/wc?uri=wc%3A8074c34247be736d0a122dc1993e3b857aac56b9bb832d406b22eb8c45939f4d%402%3Frelay-protocol%3Dirn%26symKey%3Dbfed0cc2de3bf84485489e3d081df8b7c7e5a498f23168cc041ca8d8630e00fd',
        },
        {
            label: 'Kabila',
            icon: ImageType.WALLET_KABILA,
            url: 'https://wallet.kabila.app/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        {
            label: 'MoonPay Account',
            icon: ImageType.WALLET_MOONPAY,
            url: 'https://wallet-connect.moonpay.com/wc?uri=wc%3A73656be7a0ca68a0f18bd7b54f21356b7be36fec3e17d0b96104f56bd2440085%402%3Frelay-protocol%3Dirn%26symKey%3Dbe2acbb5eec9d7c5c93b0f869a029f1e65e321de0232b4da315fda6fed715040',
        },
        {
            label: 'Earth',
            icon: ImageType.WALLET_EARTH,
            url: 'https://wallet.earth/wc?uri=wc%3A8074c34247be736d0a122dc1993e3b857aac56b9bb832d406b22eb8c45939f4d%402%3Frelay-protocol%3Dirn%26symKey%3Dbfed0cc2de3bf84485489e3d081df8b7c7e5a498f23168cc041ca8d8630e00fd',
        },
        { label: 'Wombat', icon: ImageType.WALLET_WOMBAT, url: '' },
        { label: 'Bloom', icon: ImageType.WALLET_BLOOM, url: '' },
    ];

    const [openedPart, setOpenedPart] = useState<
        'main' | 'allWallets' | 'whatIs' | 'wallet'
    >('main');
    const [filteredWallets, setFilteredWallets] = useState(wallets);
    const [recent, setRecent] = useState(wallets);

    function handlerCopy(): void {
        navigator.clipboard.writeText(qrLink);
    }

    function updateRecent(wallet: iWallet): void {
        const newRecent = [...recent];

        const selectedIndex = newRecent.findIndex(
            recentWallet => recentWallet.label === wallet.label,
        );

        if (selectedIndex !== undefined) {
            newRecent.splice(selectedIndex, 1);
        }

        newRecent.unshift(wallet);

        setRecent(newRecent);
    }

    function openLink(url: string): void {
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.target = '_blank';

        linkElement.click();
    }

    function handlerSearch(value: string): void {
        value = value.trim();

        if (value.length < 2) {
            return setFilteredWallets(wallets);
        }

        const sortedWallets = wallets.filter(wallet =>
            wallet.label.toLowerCase().includes(value.toLowerCase()),
        );

        setFilteredWallets(sortedWallets);
    }

    return (
        <div className="walletConnect w3m-modal">
            <div className="w3m-container">
                <div className="w3m-modal-backcard">
                    <div className="w3m-modal-backcard-toolbar">
                        <svg
                            width="178"
                            height="29"
                            viewBox="0 0 178 29"
                            id="w3m-wc-logo">
                            <path
                                d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z"
                                fill="#fff"></path>
                        </svg>
                        <div className="w3m-modal-backcard-toolbar-actions">
                            {/* <button>
                                <svg width="11" height="17" viewBox="0 0 11 17">
                                    <path
                                        fill="#fff"
                                        d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path>
                                </svg>
                            </button> */}
                            <button onClick={handlerClose}>
                                <svg width="12" height="12" viewBox="0 0 12 12">
                                    <path
                                        d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z"
                                        fill="#fff"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`w3m-card ${openedPart}`}>
                    {openedPart === 'main' ? (
                        <>
                            <div className="w3m-card-header">
                                <h2>Connect your wallet</h2>

                                <div
                                    className="w3m-card-header-button"
                                    onClick={handlerCopy}>
                                    <button>
                                        <svg width="24" height="24" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="w3m-card-content">
                                <div className="w3m-card-content-title">
                                    <div>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16">
                                            <path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"></path>
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z"></path>
                                        </svg>
                                        <p>Mobile</p>
                                    </div>

                                    <div>
                                        <svg width="16" height="16" fill="none">
                                            <path
                                                fill="#fff"
                                                d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"></path>
                                        </svg>
                                        <p>Scan with your wallet</p>
                                    </div>
                                </div>

                                <div className="w3m-card-content-qr">
                                    <svg id="logo" fill="none">
                                        <path
                                            fill="none"
                                            d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"></path>
                                        <path
                                            stroke="#000"
                                            d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"></path>
                                    </svg>
                                    <svg height="318" width="318" id="qr">
                                        <rect
                                            fill="#fff"
                                            height="36.49180327868852"
                                            rx="11.677377049180327"
                                            ry="11.677377049180327"
                                            width="36.49180327868852"
                                            x="0"
                                            y="0"></rect>

                                        <rect
                                            fill="#141414"
                                            height="26.065573770491802"
                                            rx="8.340983606557376"
                                            ry="8.340983606557376"
                                            width="26.065573770491802"
                                            x="5.213114754098361"
                                            y="5.213114754098361"></rect>

                                        <rect
                                            fill="#fff"
                                            height="15.639344262295083"
                                            rx="5.004590163934426"
                                            ry="5.004590163934426"
                                            width="15.639344262295083"
                                            x="10.426229508196721"
                                            y="10.426229508196721"></rect>

                                        <rect
                                            fill="#fff"
                                            height="36.49180327868852"
                                            rx="11.677377049180327"
                                            ry="11.677377049180327"
                                            width="36.49180327868852"
                                            x="281.5081967213115"
                                            y="0"></rect>

                                        <rect
                                            fill="#141414"
                                            height="26.065573770491802"
                                            rx="8.340983606557376"
                                            ry="8.340983606557376"
                                            width="26.065573770491802"
                                            x="286.72131147540983"
                                            y="5.213114754098361"></rect>

                                        <rect
                                            fill="#fff"
                                            height="15.639344262295083"
                                            rx="5.004590163934426"
                                            ry="5.004590163934426"
                                            width="15.639344262295083"
                                            x="291.93442622950823"
                                            y="10.426229508196721"></rect>

                                        <rect
                                            fill="#fff"
                                            height="36.49180327868852"
                                            rx="11.677377049180327"
                                            ry="11.677377049180327"
                                            width="36.49180327868852"
                                            x="0"
                                            y="281.5081967213115"></rect>

                                        <rect
                                            fill="#141414"
                                            height="26.065573770491802"
                                            rx="8.340983606557376"
                                            ry="8.340983606557376"
                                            width="26.065573770491802"
                                            x="5.213114754098361"
                                            y="286.72131147540983"></rect>

                                        <rect
                                            fill="#fff"
                                            height="15.639344262295083"
                                            rx="5.004590163934426"
                                            ry="5.004590163934426"
                                            width="15.639344262295083"
                                            x="10.426229508196721"
                                            y="291.93442622950823"></rect>

                                        <circle
                                            cx="159"
                                            cy="13.032786885245901"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="33.885245901639344"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="159"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="2.6065573770491803"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="132.93442622950818"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="7.8196721311475414"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="13.032786885245901"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="164.21311475409834"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="18.245901639344265"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="23.459016393442624"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="23.459016393442624"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="23.459016393442624"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="23.459016393442624"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="23.459016393442624"
                                            cy="205.91803278688525"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="96.44262295081968"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="28.672131147540984"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="96.44262295081968"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="33.885245901639344"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="39.0983606557377"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="7.8196721311475414"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="44.31147540983606"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="49.52459016393443"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="132.93442622950818"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="54.73770491803278"
                                            cy="289.327868852459"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="289.327868852459"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="59.950819672131146"
                                            cy="299.75409836065575"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="65.16393442622952"
                                            cy="33.885245901639344"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="65.16393442622952"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="65.16393442622952"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="65.16393442622952"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="65.16393442622952"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="70.37704918032787"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="33.885245901639344"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="195.4918032786885"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="75.59016393442623"
                                            cy="268.4754098360656"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="101.65573770491804"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="153.78688524590163"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="185.0655737704918"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="278.90163934426226"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="80.8032786885246"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="49.52459016393443"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="86.01639344262296"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="13.032786885245901"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="80.8032786885246"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="185.0655737704918"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="278.90163934426226"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="91.22950819672131"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="96.44262295081968"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="96.44262295081968"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="96.44262295081968"
                                            cy="153.78688524590163"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="96.44262295081968"
                                            cy="164.21311475409834"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="96.44262295081968"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="96.44262295081968"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="101.65573770491804"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="205.91803278688525"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="106.8688524590164"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="7.8196721311475414"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="278.90163934426226"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="289.327868852459"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="112.08196721311477"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="304.9672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="117.29508196721312"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="28.672131147540984"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="122.50819672131148"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="127.72131147540985"
                                            cy="13.032786885245901"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="127.72131147540985"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="127.72131147540985"
                                            cy="33.885245901639344"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="127.72131147540985"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="132.93442622950818"
                                            cy="278.90163934426226"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="138.14754098360655"
                                            cy="299.75409836065575"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="28.672131147540984"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="289.327868852459"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="143.36065573770492"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="304.9672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="148.57377049180326"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="153.78688524590163"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="153.78688524590163"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="153.78688524590163"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="13.032786885245901"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="164.21311475409834"
                                            cy="304.9672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="169.4262295081967"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="268.4754098360656"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="174.63934426229508"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="179.85245901639342"
                                            cy="49.52459016393443"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="179.85245901639342"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="179.85245901639342"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="179.85245901639342"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="185.0655737704918"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="185.0655737704918"
                                            cy="299.75409836065575"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="185.0655737704918"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="190.27868852459017"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="190.27868852459017"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="190.27868852459017"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="299.75409836065575"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="195.4918032786885"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="200.70491803278688"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="200.70491803278688"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="205.91803278688525"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="211.1311475409836"
                                            cy="304.9672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="28.672131147540984"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="80.8032786885246"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="164.21311475409834"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="216.34426229508196"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="221.55737704918033"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="221.55737704918033"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="221.55737704918033"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="221.55737704918033"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="2.6065573770491803"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="13.032786885245901"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="39.0983606557377"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="226.77049180327867"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="18.245901639344265"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="54.73770491803278"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="231.98360655737704"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="153.78688524590163"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="299.75409836065575"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="237.19672131147541"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="49.52459016393443"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="242.40983606557376"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="101.65573770491804"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="164.21311475409834"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="185.0655737704918"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="247.62295081967213"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="80.8032786885246"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="185.0655737704918"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="252.8360655737705"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="304.9672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="258.04918032786884"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="101.65573770491804"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="153.78688524590163"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="263.2622950819672"
                                            cy="258.04918032786884"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="23.459016393442624"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="132.93442622950818"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="221.55737704918033"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="268.4754098360656"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="33.885245901639344"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="59.950819672131146"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="80.8032786885246"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="263.2622950819672"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="273.6885245901639"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="148.57377049180326"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="200.70491803278688"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="247.62295081967213"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="278.90163934426226"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="80.8032786885246"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="91.22950819672131"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="106.8688524590164"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="159"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="211.1311475409836"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="231.98360655737704"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="273.6885245901639"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="284.11475409836066"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="284.11475409836066"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="101.65573770491804"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="179.85245901639342"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="252.8360655737705"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="289.327868852459"
                                            cy="294.54098360655735"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="294.54098360655735"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="294.54098360655735"
                                            cy="138.14754098360655"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="294.54098360655735"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="294.54098360655735"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="65.16393442622952"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="75.59016393442623"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="122.50819672131148"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="205.91803278688525"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="226.77049180327867"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="242.40983606557376"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="268.4754098360656"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="278.90163934426226"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="299.75409836065575"
                                            cy="310.18032786885243"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="86.01639344262296"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="101.65573770491804"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="174.63934426229508"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="190.27868852459017"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="216.34426229508196"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="237.19672131147541"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="304.9672131147541"
                                            cy="315.39344262295083"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="310.18032786885243"
                                            cy="44.31147540983606"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="310.18032786885243"
                                            cy="112.08196721311477"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="310.18032786885243"
                                            cy="143.36065573770492"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="310.18032786885243"
                                            cy="153.78688524590163"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="310.18032786885243"
                                            cy="164.21311475409834"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="315.39344262295083"
                                            cy="70.37704918032787"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="315.39344262295083"
                                            cy="117.29508196721312"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="315.39344262295083"
                                            cy="127.72131147540985"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <circle
                                            cx="315.39344262295083"
                                            cy="169.4262295081967"
                                            fill="#fff"
                                            r="2.085245901639344"></circle>

                                        <line
                                            strokeLinecap="round"
                                            x1="159"
                                            x2="159"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="159"
                                            x2="159"
                                            y1="221.55737704918033"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="159"
                                            x2="159"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="2.6065573770491803"
                                            x2="2.6065573770491803"
                                            y1="65.16393442622952"
                                            y2="80.8032786885246"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="2.6065573770491803"
                                            x2="2.6065573770491803"
                                            y1="138.14754098360655"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="2.6065573770491803"
                                            x2="2.6065573770491803"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="2.6065573770491803"
                                            x2="2.6065573770491803"
                                            y1="247.62295081967213"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="2.6065573770491803"
                                            x2="2.6065573770491803"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="7.8196721311475414"
                                            x2="7.8196721311475414"
                                            y1="54.73770491803278"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="7.8196721311475414"
                                            x2="7.8196721311475414"
                                            y1="91.22950819672131"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="7.8196721311475414"
                                            x2="7.8196721311475414"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="7.8196721311475414"
                                            x2="7.8196721311475414"
                                            y1="195.4918032786885"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="7.8196721311475414"
                                            x2="7.8196721311475414"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="106.8688524590164"
                                            y2="122.50819672131148"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="132.93442622950818"
                                            y2="138.14754098360655"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="153.78688524590163"
                                            y2="164.21311475409834"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="216.34426229508196"
                                            y2="221.55737704918033"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="237.19672131147541"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="13.032786885245901"
                                            x2="13.032786885245901"
                                            y1="263.2622950819672"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="18.245901639344265"
                                            x2="18.245901639344265"
                                            y1="44.31147540983606"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="18.245901639344265"
                                            x2="18.245901639344265"
                                            y1="106.8688524590164"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="18.245901639344265"
                                            x2="18.245901639344265"
                                            y1="148.57377049180326"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="18.245901639344265"
                                            x2="18.245901639344265"
                                            y1="190.27868852459017"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="148.57377049180326"
                                            y2="169.4262295081967"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="185.0655737704918"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="221.55737704918033"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="247.62295081967213"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="23.459016393442624"
                                            x2="23.459016393442624"
                                            y1="263.2622950819672"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="28.672131147540984"
                                            x2="28.672131147540984"
                                            y1="44.31147540983606"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="28.672131147540984"
                                            x2="28.672131147540984"
                                            y1="195.4918032786885"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="28.672131147540984"
                                            x2="28.672131147540984"
                                            y1="211.1311475409836"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="28.672131147540984"
                                            x2="28.672131147540984"
                                            y1="226.77049180327867"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="44.31147540983606"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="122.50819672131148"
                                            y2="127.72131147540985"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="169.4262295081967"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="190.27868852459017"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="39.0983606557377"
                                            x2="39.0983606557377"
                                            y1="258.04918032786884"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="28.672131147540984"
                                            y2="59.950819672131146"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="70.37704918032787"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="148.57377049180326"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="185.0655737704918"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="278.90163934426226"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="44.31147540983606"
                                            x2="44.31147540983606"
                                            y1="299.75409836065575"
                                            y2="304.9672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="39.0983606557377"
                                            y2="44.31147540983606"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="164.21311475409834"
                                            y2="169.4262295081967"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="200.70491803278688"
                                            y2="211.1311475409836"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="49.52459016393443"
                                            x2="49.52459016393443"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="7.8196721311475414"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="28.672131147540984"
                                            y2="39.0983606557377"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="65.16393442622952"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="106.8688524590164"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="216.34426229508196"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="54.73770491803278"
                                            x2="54.73770491803278"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="44.31147540983606"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="91.22950819672131"
                                            y2="117.29508196721312"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="153.78688524590163"
                                            y2="159"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="169.4262295081967"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="195.4918032786885"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="258.04918032786884"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="59.950819672131146"
                                            x2="59.950819672131146"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="2.6065573770491803"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="49.52459016393443"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="112.08196721311477"
                                            y2="122.50819672131148"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="138.14754098360655"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="179.85245901639342"
                                            y2="185.0655737704918"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="195.4918032786885"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="211.1311475409836"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="65.16393442622952"
                                            x2="65.16393442622952"
                                            y1="289.327868852459"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="86.01639344262296"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="143.36065573770492"
                                            y2="164.21311475409834"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="174.63934426229508"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="205.91803278688525"
                                            y2="211.1311475409836"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="242.40983606557376"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="273.6885245901639"
                                            y2="278.90163934426226"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="70.37704918032787"
                                            x2="70.37704918032787"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="18.245901639344265"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="70.37704918032787"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="86.01639344262296"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="112.08196721311477"
                                            y2="132.93442622950818"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="211.1311475409836"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="75.59016393442623"
                                            x2="75.59016393442623"
                                            y1="299.75409836065575"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="18.245901639344265"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="39.0983606557377"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="70.37704918032787"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="205.91803278688525"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="263.2622950819672"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="80.8032786885246"
                                            x2="80.8032786885246"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="23.459016393442624"
                                            y2="39.0983606557377"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="91.22950819672131"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="159"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="200.70491803278688"
                                            y2="205.91803278688525"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="221.55737704918033"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="252.8360655737705"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="86.01639344262296"
                                            x2="86.01639344262296"
                                            y1="284.11475409836066"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="101.65573770491804"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="127.72131147540985"
                                            y2="132.93442622950818"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="164.21311475409834"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="195.4918032786885"
                                            y2="205.91803278688525"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="91.22950819672131"
                                            x2="91.22950819672131"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="28.672131147540984"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="112.08196721311477"
                                            y2="117.29508196721312"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="127.72131147540985"
                                            y2="132.93442622950818"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="174.63934426229508"
                                            y2="179.85245901639342"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="190.27868852459017"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="205.91803278688525"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="226.77049180327867"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="247.62295081967213"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="96.44262295081968"
                                            x2="96.44262295081968"
                                            y1="294.54098360655735"
                                            y2="304.9672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="65.16393442622952"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="117.29508196721312"
                                            y2="127.72131147540985"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="200.70491803278688"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="252.8360655737705"
                                            y2="278.90163934426226"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="101.65573770491804"
                                            x2="101.65573770491804"
                                            y1="289.327868852459"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="28.672131147540984"
                                            y2="33.885245901639344"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="65.16393442622952"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="91.22950819672131"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="112.08196721311477"
                                            y2="117.29508196721312"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="179.85245901639342"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="263.2622950819672"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="106.8688524590164"
                                            x2="106.8688524590164"
                                            y1="304.9672131147541"
                                            y2="310.18032786885243"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="18.245901639344265"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="39.0983606557377"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="70.37704918032787"
                                            y2="86.01639344262296"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="96.44262295081968"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="112.08196721311477"
                                            x2="112.08196721311477"
                                            y1="263.2622950819672"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="7.8196721311475414"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="33.885245901639344"
                                            y2="44.31147540983606"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="59.950819672131146"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="86.01639344262296"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="252.8360655737705"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="117.29508196721312"
                                            x2="117.29508196721312"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="122.50819672131148"
                                            x2="122.50819672131148"
                                            y1="2.6065573770491803"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="122.50819672131148"
                                            x2="122.50819672131148"
                                            y1="65.16393442622952"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="122.50819672131148"
                                            x2="122.50819672131148"
                                            y1="237.19672131147541"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="122.50819672131148"
                                            x2="122.50819672131148"
                                            y1="252.8360655737705"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="44.31147540983606"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="70.37704918032787"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="216.34426229508196"
                                            y2="221.55737704918033"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="237.19672131147541"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="127.72131147540985"
                                            x2="127.72131147540985"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="132.93442622950818"
                                            x2="132.93442622950818"
                                            y1="2.6065573770491803"
                                            y2="28.672131147540984"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="132.93442622950818"
                                            x2="132.93442622950818"
                                            y1="226.77049180327867"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="132.93442622950818"
                                            x2="132.93442622950818"
                                            y1="289.327868852459"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="132.93442622950818"
                                            x2="132.93442622950818"
                                            y1="304.9672131147541"
                                            y2="310.18032786885243"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="138.14754098360655"
                                            x2="138.14754098360655"
                                            y1="28.672131147540984"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="138.14754098360655"
                                            x2="138.14754098360655"
                                            y1="65.16393442622952"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="138.14754098360655"
                                            x2="138.14754098360655"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="138.14754098360655"
                                            x2="138.14754098360655"
                                            y1="237.19672131147541"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="138.14754098360655"
                                            x2="138.14754098360655"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="143.36065573770492"
                                            x2="143.36065573770492"
                                            y1="49.52459016393443"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="143.36065573770492"
                                            x2="143.36065573770492"
                                            y1="70.37704918032787"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="143.36065573770492"
                                            x2="143.36065573770492"
                                            y1="86.01639344262296"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="143.36065573770492"
                                            x2="143.36065573770492"
                                            y1="216.34426229508196"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="148.57377049180326"
                                            x2="148.57377049180326"
                                            y1="13.032786885245901"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="148.57377049180326"
                                            x2="148.57377049180326"
                                            y1="75.59016393442623"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="148.57377049180326"
                                            x2="148.57377049180326"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="148.57377049180326"
                                            x2="148.57377049180326"
                                            y1="273.6885245901639"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="65.16393442622952"
                                            y2="80.8032786885246"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="91.22950819672131"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="211.1311475409836"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="258.04918032786884"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="153.78688524590163"
                                            x2="153.78688524590163"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="164.21311475409834"
                                            x2="164.21311475409834"
                                            y1="59.950819672131146"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="164.21311475409834"
                                            x2="164.21311475409834"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="164.21311475409834"
                                            x2="164.21311475409834"
                                            y1="216.34426229508196"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="164.21311475409834"
                                            x2="164.21311475409834"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="164.21311475409834"
                                            x2="164.21311475409834"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="169.4262295081967"
                                            x2="169.4262295081967"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="169.4262295081967"
                                            x2="169.4262295081967"
                                            y1="23.459016393442624"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="169.4262295081967"
                                            x2="169.4262295081967"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="169.4262295081967"
                                            x2="169.4262295081967"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="169.4262295081967"
                                            x2="169.4262295081967"
                                            y1="273.6885245901639"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="174.63934426229508"
                                            x2="174.63934426229508"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="174.63934426229508"
                                            x2="174.63934426229508"
                                            y1="18.245901639344265"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="174.63934426229508"
                                            x2="174.63934426229508"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="174.63934426229508"
                                            x2="174.63934426229508"
                                            y1="216.34426229508196"
                                            y2="221.55737704918033"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="174.63934426229508"
                                            x2="174.63934426229508"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="28.672131147540984"
                                            y2="33.885245901639344"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="59.950819672131146"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="216.34426229508196"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="284.11475409836066"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="179.85245901639342"
                                            x2="179.85245901639342"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="13.032786885245901"
                                            y2="18.245901639344265"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="39.0983606557377"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="75.59016393442623"
                                            y2="86.01639344262296"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="96.44262295081968"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="211.1311475409836"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="185.0655737704918"
                                            x2="185.0655737704918"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="7.8196721311475414"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="23.459016393442624"
                                            y2="39.0983606557377"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="231.98360655737704"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="258.04918032786884"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="190.27868852459017"
                                            x2="190.27868852459017"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="195.4918032786885"
                                            x2="195.4918032786885"
                                            y1="7.8196721311475414"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="195.4918032786885"
                                            x2="195.4918032786885"
                                            y1="59.950819672131146"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="195.4918032786885"
                                            x2="195.4918032786885"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="195.4918032786885"
                                            x2="195.4918032786885"
                                            y1="242.40983606557376"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="195.4918032786885"
                                            x2="195.4918032786885"
                                            y1="268.4754098360656"
                                            y2="278.90163934426226"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="13.032786885245901"
                                            y2="18.245901639344265"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="28.672131147540984"
                                            y2="44.31147540983606"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="54.73770491803278"
                                            y2="59.950819672131146"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="216.34426229508196"
                                            y2="221.55737704918033"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="263.2622950819672"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="200.70491803278688"
                                            x2="200.70491803278688"
                                            y1="299.75409836065575"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="205.91803278688525"
                                            x2="205.91803278688525"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="205.91803278688525"
                                            x2="205.91803278688525"
                                            y1="18.245901639344265"
                                            y2="28.672131147540984"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="205.91803278688525"
                                            x2="205.91803278688525"
                                            y1="54.73770491803278"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="205.91803278688525"
                                            x2="205.91803278688525"
                                            y1="101.65573770491804"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="205.91803278688525"
                                            x2="205.91803278688525"
                                            y1="284.11475409836066"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="7.8196721311475414"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="33.885245901639344"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="70.37704918032787"
                                            y2="80.8032786885246"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="91.22950819672131"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="106.8688524590164"
                                            y2="117.29508196721312"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="148.57377049180326"
                                            y2="164.21311475409834"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="221.55737704918033"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="211.1311475409836"
                                            x2="211.1311475409836"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="39.0983606557377"
                                            y2="59.950819672131146"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="148.57377049180326"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="174.63934426229508"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="258.04918032786884"
                                            y2="278.90163934426226"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="216.34426229508196"
                                            x2="216.34426229508196"
                                            y1="289.327868852459"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="2.6065573770491803"
                                            y2="33.885245901639344"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="80.8032786885246"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="101.65573770491804"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="174.63934426229508"
                                            y2="179.85245901639342"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="190.27868852459017"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="221.55737704918033"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="268.4754098360656"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="221.55737704918033"
                                            x2="221.55737704918033"
                                            y1="299.75409836065575"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="49.52459016393443"
                                            y2="59.950819672131146"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="117.29508196721312"
                                            y2="122.50819672131148"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="159"
                                            y2="164.21311475409834"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="195.4918032786885"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="226.77049180327867"
                                            x2="226.77049180327867"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="28.672131147540984"
                                            y2="33.885245901639344"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="65.16393442622952"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="96.44262295081968"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="132.93442622950818"
                                            y2="138.14754098360655"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="169.4262295081967"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="185.0655737704918"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="231.98360655737704"
                                            x2="231.98360655737704"
                                            y1="211.1311475409836"
                                            y2="226.77049180327867"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="2.6065573770491803"
                                            y2="7.8196721311475414"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="39.0983606557377"
                                            y2="44.31147540983606"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="59.950819672131146"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="91.22950819672131"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="106.8688524590164"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="200.70491803278688"
                                            y2="205.91803278688525"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="237.19672131147541"
                                            x2="237.19672131147541"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="2.6065573770491803"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="23.459016393442624"
                                            y2="33.885245901639344"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="86.01639344262296"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="148.57377049180326"
                                            y2="179.85245901639342"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="190.27868852459017"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="211.1311475409836"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="231.98360655737704"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="258.04918032786884"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="273.6885245901639"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="242.40983606557376"
                                            x2="242.40983606557376"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="7.8196721311475414"
                                            y2="28.672131147540984"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="39.0983606557377"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="70.37704918032787"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="143.36065573770492"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="195.4918032786885"
                                            y2="211.1311475409836"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="252.8360655737705"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="247.62295081967213"
                                            x2="247.62295081967213"
                                            y1="278.90163934426226"
                                            y2="284.11475409836066"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="13.032786885245901"
                                            y2="39.0983606557377"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="49.52459016393443"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="138.14754098360655"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="195.4918032786885"
                                            y2="211.1311475409836"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="242.40983606557376"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="284.11475409836066"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="252.8360655737705"
                                            x2="252.8360655737705"
                                            y1="299.75409836065575"
                                            y2="304.9672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="2.6065573770491803"
                                            y2="23.459016393442624"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="54.73770491803278"
                                            y2="86.01639344262296"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="179.85245901639342"
                                            y2="185.0655737704918"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="205.91803278688525"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="237.19672131147541"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="258.04918032786884"
                                            x2="258.04918032786884"
                                            y1="258.04918032786884"
                                            y2="289.327868852459"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="13.032786885245901"
                                            y2="39.0983606557377"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="70.37704918032787"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="122.50819672131148"
                                            y2="143.36065573770492"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="179.85245901639342"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="268.4754098360656"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="263.2622950819672"
                                            x2="263.2622950819672"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="2.6065573770491803"
                                            y2="13.032786885245901"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="44.31147540983606"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="80.8032786885246"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="153.78688524590163"
                                            y2="159"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="179.85245901639342"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="231.98360655737704"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="252.8360655737705"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="268.4754098360656"
                                            x2="268.4754098360656"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="2.6065573770491803"
                                            y2="18.245901639344265"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="91.22950819672131"
                                            y2="96.44262295081968"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="148.57377049180326"
                                            y2="179.85245901639342"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="190.27868852459017"
                                            y2="200.70491803278688"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="247.62295081967213"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="273.6885245901639"
                                            x2="273.6885245901639"
                                            y1="273.6885245901639"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="278.90163934426226"
                                            x2="278.90163934426226"
                                            y1="54.73770491803278"
                                            y2="75.59016393442623"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="278.90163934426226"
                                            x2="278.90163934426226"
                                            y1="86.01639344262296"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="278.90163934426226"
                                            x2="278.90163934426226"
                                            y1="122.50819672131148"
                                            y2="127.72131147540985"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="278.90163934426226"
                                            x2="278.90163934426226"
                                            y1="258.04918032786884"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="278.90163934426226"
                                            x2="278.90163934426226"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="59.950819672131146"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="117.29508196721312"
                                            y2="132.93442622950818"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="169.4262295081967"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="242.40983606557376"
                                            y2="247.62295081967213"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="258.04918032786884"
                                            y2="263.2622950819672"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="284.11475409836066"
                                            x2="284.11475409836066"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="143.36065573770492"
                                            y2="148.57377049180326"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="190.27868852459017"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="211.1311475409836"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="237.19672131147541"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="289.327868852459"
                                            x2="289.327868852459"
                                            y1="304.9672131147541"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="49.52459016393443"
                                            y2="54.73770491803278"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="80.8032786885246"
                                            y2="86.01639344262296"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="96.44262295081968"
                                            y2="106.8688524590164"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="117.29508196721312"
                                            y2="122.50819672131148"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="148.57377049180326"
                                            y2="174.63934426229508"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="185.0655737704918"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="200.70491803278688"
                                            y2="205.91803278688525"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="226.77049180327867"
                                            y2="231.98360655737704"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="242.40983606557376"
                                            y2="252.8360655737705"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="294.54098360655735"
                                            x2="294.54098360655735"
                                            y1="273.6885245901639"
                                            y2="294.54098360655735"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="44.31147540983606"
                                            y2="49.52459016393443"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="101.65573770491804"
                                            y2="112.08196721311477"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="138.14754098360655"
                                            y2="143.36065573770492"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="159"
                                            y2="169.4262295081967"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="190.27868852459017"
                                            y2="195.4918032786885"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="252.8360655737705"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="299.75409836065575"
                                            x2="299.75409836065575"
                                            y1="294.54098360655735"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="304.9672131147541"
                                            x2="304.9672131147541"
                                            y1="54.73770491803278"
                                            y2="70.37704918032787"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="304.9672131147541"
                                            x2="304.9672131147541"
                                            y1="143.36065573770492"
                                            y2="153.78688524590163"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="304.9672131147541"
                                            x2="304.9672131147541"
                                            y1="247.62295081967213"
                                            y2="304.9672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="59.950819672131146"
                                            y2="65.16393442622952"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="75.59016393442623"
                                            y2="91.22950819672131"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="127.72131147540985"
                                            y2="132.93442622950818"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="174.63934426229508"
                                            y2="179.85245901639342"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="190.27868852459017"
                                            y2="216.34426229508196"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="231.98360655737704"
                                            y2="237.19672131147541"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="247.62295081967213"
                                            y2="258.04918032786884"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="268.4754098360656"
                                            y2="273.6885245901639"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="310.18032786885243"
                                            x2="310.18032786885243"
                                            y1="284.11475409836066"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="54.73770491803278"
                                            y2="59.950819672131146"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="80.8032786885246"
                                            y2="101.65573770491804"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="148.57377049180326"
                                            y2="159"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="179.85245901639342"
                                            y2="190.27868852459017"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="205.91803278688525"
                                            y2="211.1311475409836"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="231.98360655737704"
                                            y2="242.40983606557376"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="252.8360655737705"
                                            y2="268.4754098360656"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="284.11475409836066"
                                            y2="299.75409836065575"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>

                                        <line
                                            strokeLinecap="round"
                                            x1="315.39344262295083"
                                            x2="315.39344262295083"
                                            y1="310.18032786885243"
                                            y2="315.39344262295083"
                                            stroke="#fff"
                                            strokeWidth="4.170491803278688"></line>
                                    </svg>
                                </div>
                            </div>

                            <div className="w3m-card-footer">
                                <div className="w3m-card-footer-title">
                                    <div>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z"></path>
                                            <path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"></path>
                                        </svg>
                                        <p>Desktop</p>
                                    </div>
                                </div>

                                <div className="w3m-card-footer-content">
                                    {recent.slice(0, 3).map((wallet, i) => (
                                        <button
                                            className="wallet-content-container"
                                            onClick={() => {updateRecent(wallet); openLink(wallet.url)}}
                                            key={`w3m-footer wallet #${i}`}>
                                            <img src={wallet.icon} alt="" />
                                            <p>{wallet.label}</p>
                                            {i === 0 ? <span>RECENT</span> : ''}
                                        </button>
                                    ))}

                                    <button
                                        className="wallet-content-container viewAll"
                                        onClick={() =>
                                            setOpenedPart('allWallets')
                                        }>
                                        <div>
                                            <img src={wallets[3].icon} alt="" />
                                            <img src={wallets[4].icon} alt="" />
                                            <img src={wallets[5].icon} alt="" />
                                            <img src={wallets[6].icon} alt="" />
                                        </div>
                                        <p>View All</p>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : openedPart === 'allWallets' ? (
                        <>
                            <div className="w3m-card-header">
                                <button onClick={() => setOpenedPart('main')}>
                                    <svg
                                        width="10"
                                        height="18"
                                        viewBox="0 0 10 18">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z"></path>
                                    </svg>
                                </button>

                                <input
                                    type="text"
                                    placeholder="Search wallets"
                                    onChange={({ target }) =>
                                        handlerSearch(target.value)
                                    }
                                />
                            </div>

                            <div className="w3m-card-content">
                                {filteredWallets.map((wallet, i) => (
                                    <button
                                        className="wallet-content-container"
                                        onClick={() => {updateRecent(wallet); modal_show()}}
                                        key={`w3m-all-content wallet #${i}`}>
                                        <img src={wallet.icon} alt="" />
                                        <p>{wallet.label}</p>
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}
