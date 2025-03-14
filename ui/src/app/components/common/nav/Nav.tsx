/** @format */

import { AppInfoContext } from '@app/contexts/appInfoContext';
import './Nav.scss';
import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import Button from '@app/components/controls/button/Button';
import { ButtonSize, ButtonType } from '@app/types/button.type';
import { ModalContext } from '@app/contexts/modalContext';
import Logo from '../../../../assets/images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const { contextAppInfo } = useContext(AppInfoContext);
    const { setContextModal } = useContext(ModalContext);

    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

    const navButtons: {
        label: string;
        link?: string;
        onClick?: MouseEventHandler;
    }[] = [
            { label: 'Продукты', onClick: toggleSubmenu },
            { label: 'Стоимость', link: '/#pricing' },
            { label: 'Риски', link: '/risks' },
            { label: 'FAQ', link: '/#faq' },
            { label: 'О нас', link: '/#about' },
        ];

    const location = useLocation();

    useEffect(() => {
        const anchor = location.hash.slice(1);

        setTimeout(() => {
            if (anchor) {
                document.getElementById(anchor)?.scrollIntoView();
            } else {
                window.scrollTo(0, 0);
            }
        }, 0);
    }, [location]);

    function toggleBurger(): void {
        setIsOpenBurger(!isOpenBurger);
    }

    function toggleSubmenu(): void {
        setIsOpenSubmenu(!isOpenSubmenu);
    }

    function closeAll(): void {
        setIsOpenBurger(false);
        setIsOpenSubmenu(false);
    }

    return (
        <>
            <header className="Header_header__5SOa7 Header_header--white__eYe4R">
                <div className="wrapper Header_wrapper__HEZou">
                    <Link to="/">
                        <div className="Header_logo__RrtGZ">
                            <img src={Logo} alt="logo" />
                            <h2>{contextAppInfo.project.fullName}</h2>
                        </div>
                    </Link>

                    <nav className="Header_links__2PHvU">
                        {navButtons.map((button, i) =>
                            button.link ? (
                                <Link
                                    to={`${button.link}`}
                                    className="Header_link__10dA7"
                                    key={`nav button #${i}`}
                                    onClick={closeAll}>
                                    {button.label}
                                </Link>
                            ) : (
                                <button
                                    className="Header_link__10dA7"
                                    onClick={button.onClick}
                                    key={`nav button #${i}`}>
                                    <span>{button.label}</span>
                                    <span
                                        className={`arrow ${isOpenSubmenu ? 'active' : ''}`}></span>
                                </button>
                            ),
                        )}
                    </nav>

                    <div className="Header_actions__7WWGd">
                        <Button
                            type={ButtonType.SECONDARY}
                            size={ButtonSize.SMALL}
                            label="Проверить кошелек"
                            onClick={() => setContextModal({ isOpen: true })}
                        // onClick={() => modal_show()}
                        />

                        <Button
                            type={ButtonType.PRIMARY}
                            size={ButtonSize.SMALL}
                            label="Личный кабинет"
                            onClick={() => setContextModal({ isOpen: true })}
                        // onClick={() => modal_show()}
                        />
                    </div>

                    <button
                        className="ButtonBurger_burger__5XLLY"
                        onClick={toggleBurger}>
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3,9H29a2,2,0,0,0,0-4H3A2,2,0,0,0,3,9Z" />
                            <path d="M29,14H3a2,2,0,0,0,0,4H29a2,2,0,0,0,0-4Z" />
                            <path d="M29,23H3a2,2,0,0,0,0,4H29a2,2,0,0,0,0-4Z" />
                        </svg>
                    </button>
                </div>
            </header>
            <div
                className={`MenuProducts_menu__DXLMu ${isOpenSubmenu ? 'enter-active' : ''}`}>
                <div className="wrapper MenuProducts_wrapper__73x_s">
                    <div className="MenuProducts_group__LC4Ut">
                        <h3 className="MenuProducts_group__title__4SOJB">
                            Для бизнеса
                        </h3>
                        <div>
                            <Link
                                className="MenuProducts_item__bdyw_ MenuProducts_item--1__4rx4X"
                                to="/#api-integration"
                                onClick={closeAll}>
                                <h4 className="MenuProducts_item__title__jbiYr">
                                    Интеграция с API{' '}
                                </h4>
                                <p className="MenuProducts_item__description__VvYeX">
                                    Автоматическая проверка всех входящих
                                    транзакций с помощью API
                                </p>
                            </Link>
                            <Link
                                className="MenuProducts_item__bdyw_ MenuProducts_item--2__Nr1jO"
                                to="/#reviews"
                                onClick={closeAll}>
                                <h4 className="MenuProducts_item__title__jbiYr">
                                    Консалтинг
                                </h4>
                                <p className="MenuProducts_item__description__VvYeX">
                                    Мы помогаем крипто бизнесу в составлении{' '}
                                    {contextAppInfo.project.shortName}
                                    процедур, предоставлении{' '}
                                    {contextAppInfo.project.shortName} тренингов
                                    и в открытие банковских счетов
                                </p>
                            </Link>
                            <Link
                                className="MenuProducts_item__bdyw_ MenuProducts_item--5__DC_xf"
                                to="/"
                                onClick={closeAll}>
                                <h4 className="MenuProducts_item__title__jbiYr">
                                    Автоматический KYC
                                </h4>
                                <p className="MenuProducts_item__description__VvYeX">
                                    Проверяйте больше пользователей с помощью
                                    быстрой, безопасной, автоматизированной и
                                    эффективной проверки.
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="MenuProducts_group__LC4Ut">
                        <h3 className="MenuProducts_group__title__4SOJB">
                            Для всех
                        </h3>
                        <div>
                            <Link
                                className="MenuProducts_item__bdyw_ MenuProducts_item--3__9GdpU"
                                to="/"
                                onClick={closeAll}>
                                <h4 className="MenuProducts_item__title__jbiYr">
                                    {contextAppInfo.project.fullName}
                                </h4>
                                <p className="MenuProducts_item__description__VvYeX">
                                    Проверяем криптокошельки на грязные деньги
                                </p>
                            </Link>
                            <Link
                                className="MenuProducts_item__bdyw_ MenuProducts_item--4__K2L1e"
                                to="/#investigation"
                                onClick={closeAll}>
                                <h4 className="MenuProducts_item__title__jbiYr">
                                    Расследование
                                </h4>
                                <p className="MenuProducts_item__description__VvYeX">
                                    Помогаем спасти украденную крипту
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`MenuBurger_menu__GAFcQ ${isOpenBurger ? 'enter-active' : ''}`}>
                <div className="MenuBurger_inner__fifiX">
                    <nav className="MenuBurger_links__Wc59I">
                        <div className="MenuBurger_item__DZdgl MenuBurger_has-submenu__KlCgp">
                            <button
                                className="MenuBurger_link___O9tw"
                                onClick={toggleSubmenu}>
                                <span>Продукты</span>
                                <span
                                    className={`arrow ${isOpenSubmenu ? 'active' : ''}`}></span>
                            </button>
                            <div
                                className={`SlideToggle_container__c7nrF ${isOpenSubmenu ? 'enter-active' : ''}`}>
                                <div>
                                    <div className="MenuBurger_submenu__BQusO">
                                        <div className="MenuBurger_submenu__group__6Uk7q">
                                            <h4 className="MenuBurger_submenu__title__TVzgx">
                                                <span>Для бизнеса</span>
                                            </h4>
                                            <div>
                                                <div className="MenuBurger_submenu__item__uWXtx">
                                                    <Link
                                                        className="MenuBurger_submenu__link__3CFsv"
                                                        to="/#api-integration"
                                                        onClick={closeAll}>
                                                        Интеграция с API{' '}
                                                    </Link>
                                                </div>
                                                <div className="MenuBurger_submenu__item__uWXtx">
                                                    <Link
                                                        className="MenuBurger_submenu__link__3CFsv"
                                                        to="/#reviews"
                                                        onClick={closeAll}>
                                                        Консалтинг
                                                    </Link>
                                                </div>
                                                <div className="MenuBurger_submenu__item__uWXtx">
                                                    <Link
                                                        className="MenuBurger_submenu__link__3CFsv"
                                                        to="/"
                                                        onClick={closeAll}>
                                                        Автоматический KYC
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="MenuBurger_submenu__group__6Uk7q">
                                            <h4 className="MenuBurger_submenu__title__TVzgx">
                                                <span>Для всех</span>
                                            </h4>
                                            <div>
                                                <div className="MenuBurger_submenu__item__uWXtx">
                                                    <Link
                                                        className="MenuBurger_submenu__link__3CFsv"
                                                        to="/"
                                                        onClick={closeAll}>
                                                        {
                                                            contextAppInfo
                                                                .project
                                                                .fullName
                                                        }
                                                    </Link>
                                                </div>
                                                <div className="MenuBurger_submenu__item__uWXtx">
                                                    <Link
                                                        className="MenuBurger_submenu__link__3CFsv"
                                                        to="/#investigation"
                                                        onClick={closeAll}>
                                                        Расследование
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="MenuBurger_item__DZdgl">
                            <Link
                                className="MenuBurger_link___O9tw"
                                to="/#how-it-works"
                                onClick={closeAll}>
                                Как работает?
                            </Link>
                        </div>
                        <div className="MenuBurger_item__DZdgl">
                            <Link
                                className="MenuBurger_link___O9tw"
                                to="/#pricing"
                                onClick={closeAll}>
                                Стоимость
                            </Link>
                        </div>
                        <div className="MenuBurger_item__DZdgl">
                            <Link
                                to="/risks"
                                className="MenuBurger_link___O9tw"
                                onClick={closeAll}>
                                Риски
                            </Link>
                        </div>
                        <div className="MenuBurger_item__DZdgl">
                            <Link
                                className="MenuBurger_link___O9tw"
                                to="/#faq"
                                onClick={closeAll}>
                                FAQ
                            </Link>
                        </div>
                        <div className="MenuBurger_item__DZdgl">
                            <Link
                                className="MenuBurger_link___O9tw"
                                to="/#about"
                                onClick={closeAll}>
                                О нас
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
