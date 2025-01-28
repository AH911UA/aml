/** @format */

import { useContext } from 'react';
import './Nav.scss';
import Logo from '../../../../../assets/images/logo.svg';
import { AppInfoContext } from '@app/contexts/appInfoContext';
import { AdminScreen, AppSection } from '@app/types/screen.type';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const { contextAppInfo } = useContext(AppInfoContext);

    const location = useLocation();

    const tabs: { label: string; url: string }[] = [
        {
            label: 'Project settings',
            url: `/${AppSection.ADMIN}/${AdminScreen.PROJECT_SETTINGS}`,
        },
        {
            label: 'Telegram settings',
            url: `/${AppSection.ADMIN}/${AdminScreen.TELEGRAM_SETTINGS}`,
        },
    ];

    return (
        <div className="adminNav">
            <div className="wrapper">
                <div className="adminNav_logo">
                    <img src={Logo} alt="logo" />
                    <h2>{contextAppInfo.project.fullName}</h2>
                </div>

                <div className="adminNav_tabs">
                    {tabs.map((tab, i) => (
                        <Link
                            to={tab.url}
                            className={
                                location.pathname === tab.url ? 'active' : ''
                            }
                            key={`admin nav tab #${i}`}>
                            {tab.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
