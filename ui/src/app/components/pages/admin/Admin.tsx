/** @format */

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Admin.scss';
import Login from './login/Login';
import { useContext, useEffect } from 'react';
import { InjectorContext } from '@app/contexts/injectorContext';
import ProjectSettings from './project-settings/ProjectSettings';
import { AdminScreen, AppSection } from '@app/types/screen.type';
import TelegramSettings from './telegram-settings/TelegramSettings';

export default function Admin() {
    const { contextInjector } = useContext(InjectorContext);

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        checkSession();
    }, []);

    async function checkSession(): Promise<void> {
        try {
            const user = getUserFromStorage();

            await checkToken(user);
        } catch (error) {
            console.log(error);

            goLogin();
        }
    }

    function getUserFromStorage(): { login: string; token: string } {
        const login = localStorage.getItem('login');
        const token = localStorage.getItem('token');

        if (!login || !token) {
            throw 'There isn`t user in storage';
        }

        return { login, token };
    }

    async function checkToken(user: {
        login: string;
        token: string;
    }): Promise<void> {
        await contextInjector.UserService.checkToken(user.login, user.token);

        goSettings();
    }

    function goLogin(): void {
        const loginPage = `/${AppSection.ADMIN}/${AdminScreen.LOGIN}`;

        if (location.pathname !== loginPage) {
            navigate(loginPage);
        }
    }

    function goSettings(): void {
        const loginPage = `/${AppSection.ADMIN}/${AdminScreen.LOGIN}`;
        const settingsPage = `/${AppSection.ADMIN}/${AdminScreen.PROJECT_SETTINGS}`;

        if (location.pathname === loginPage) {
            navigate(settingsPage);
        }
    }

    return (
        <div className="admin">
            {id === AdminScreen.LOGIN ? (
                <Login />
            ) : id === AdminScreen.PROJECT_SETTINGS ? (
                <ProjectSettings />
            ) : (
                id === AdminScreen.TELEGRAM_SETTINGS ? <TelegramSettings /> : ''
            )}
        </div>
    );
}
