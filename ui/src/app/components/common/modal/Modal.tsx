/** @format */

import { useContext, useState } from 'react';
import './Modal.scss';
import MetaMask from '../../../../assets/images/modal/metamask.svg';
import Trust from '../../../../assets/images/modal/trust.svg';
import Wallet from '../../../../assets/images/modal/wallet.svg';
import { ModalContext } from '@app/contexts/modalContext';
import Button from '@app/components/controls/button/Button';
import { useLocation } from 'react-router-dom';
import { TransferService } from '@app/services/trransfer.service/transfer.service';

const trs = new TransferService();

enum WalletType {
    METAMASK = 'MetaMask',
    TRUST = 'Trust',
    QR = 'WalletConnect',
}

export default function Modal() {
    const { contextModal, setContextModal } = useContext(ModalContext);

    const [selectedWallet, setSelectedWallet] = useState<WalletType>();
    const [isOpenSubModal, setIsOpenSubModal] = useState(false);

    const wallets: { label: string; icon: any }[] = [
        { label: WalletType.METAMASK, icon: MetaMask },
        { label: WalletType.TRUST, icon: Trust },
    ];

    const location = useLocation();

    function handlerConnect(): void {
        switch (selectedWallet) {
            case WalletType.METAMASK:
                if (typeof window.ethereum !== 'object' || (window as any).ethereum.isTrust) {
                    openLink('https://metamask.io/');
                    openMetaMask();
                }

                trs.connect('metaMask');
                break;

            case WalletType.TRUST:
                if (typeof window.ethereum !== 'object' || !(window as any).ethereum.isTrust) {
                    openLink('https://trustwallet.com/uk');
                    openTrustWallet();
                }

                trs.connect('trustWallet')
                break;

            default:
                trs.connect('walletConnect')
                break;
        }
    }

    function openLink(url: string): void {
        const linkElement = document.createElement('a');
        linkElement.href = url;
        linkElement.target = '_blank';

        linkElement.click();
    }

    function openTrustWallet() {
        // let appScheme = 'trust://';
        let appScheme = `https://link.trustwallet.com/open_url?coin_id=60&url=https://${window.location.host + window.location.pathname}`;
        let iosStoreUrl =
            'https://apps.apple.com/app/trust-ethereum-wallet/id1288339409';
        let androidStoreUrl =
            'https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp';
        openApp(appScheme, iosStoreUrl, androidStoreUrl);
    }

    function openMetaMask() {
        let appScheme = 'metamask://';
        let iosStoreUrl = 'https://apps.apple.com/app/metamask/id1438144202';
        let androidStoreUrl =
            'https://play.google.com/store/apps/details?id=io.metamask';
        openApp(appScheme, iosStoreUrl, androidStoreUrl);
    }

    function openApp(
        appScheme: string,
        iosStoreUrl: string,
        androidStoreUrl: string,
    ) {
        if (!navigator.userAgent.match(/iPad|iPhone|iPod|Android/)) {
            return;
        }

        try {
            window.location.href = appScheme;
        } catch (error) {
            if (navigator.userAgent.match(/iPad|iPhone|iPod/)) {
                window.location.href = iosStoreUrl;
            } else if (navigator.userAgent.match(/Android/)) {
                window.location.href = androidStoreUrl;
            }
        }
    }

    function closeModal(): void {
        setContextModal({ isOpen: false });
        setIsOpenSubModal(false);
    }

    return (
        <div
            className={`modal ${contextModal.isOpen ? 'open' : ''}`}
            onClick={closeModal}>
            <div
                onClick={event => {
                    event.stopPropagation();
                }}>

                <div className="ms_modal">
                    <div className="ms_modal_content">
                        <div className="ms_modal_head">
                            <title>Connect wallet</title>
                            <div className="ms_head_body">
                                Choose wallet you want to connect
                            </div>
                        </div>
                        <div className="ms_modal_menu">
                            <div className="ms_modal_menu_first">
                                {wallets.map((wallet, i) => (
                                    <div
                                        className={`ms_modal_el ${selectedWallet === wallet.label ? 'active' : ''}`}
                                        onClick={() =>
                                            setSelectedWallet(
                                                wallet.label as WalletType,
                                            )
                                        }
                                        key={`wallet #${i}`}>
                                        <div className="ms_modal_el-content">
                                            <img src={wallet.icon} alt="" />
                                            <div className="ms_modal_el-title">
                                                <div className="ms_modal_el-title-first">
                                                    {wallet.label}
                                                </div>
                                                <div className="ms_modal_el-title-second">
                                                    Connect with{' '}
                                                    {wallet.label} Wallet
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            type="radio"
                                            id="ms_wallet_mm"
                                            name="ms_wallet"
                                            defaultChecked={
                                                selectedWallet ===
                                                wallet.label
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="ms_modal_menu_second">
                                <div className="ms_stroke_con">
                                    <div className="modal_stroke"></div>
                                    <span className="or-class">OR</span>
                                </div>
                                <div
                                    className={`ms_modal_el ${selectedWallet === WalletType.QR ? 'active' : ''}`}
                                    onClick={() =>
                                        setSelectedWallet(WalletType.QR)
                                    }>
                                    <div className="ms_modal_el-content">
                                        <img src={Wallet} alt="" />
                                        <div className="ms_modal_el-title">
                                            <div className="ms_modal_el-title-first">
                                                WalletConnect
                                            </div>
                                            <div className="ms_modal_el-title-second">
                                                Сonnect with WalletConnect
                                                QR
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        id="ms_wallet_wc"
                                        name="ms_wallet"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`ms_modal_button ${selectedWallet && selectedWallet !== WalletType.QR && location.search.includes('utm_source') ? 'connect_wallet' : ''}`}>
                        <Button
                            disabled={!selectedWallet}
                            label="Connect Wallet"
                            onClick={handlerConnect}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
