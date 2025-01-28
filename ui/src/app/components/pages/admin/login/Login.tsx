/** @format */

import Button from '@app/components/controls/button/Button';
import './Login.scss';
import { ButtonSize, ButtonType } from '@app/types/button.type';
import { useContext, useRef } from 'react';
import { InjectorContext } from '@app/contexts/injectorContext';
import { LoaderContext } from '@app/contexts/loaderContext';
import { AdminScreen, AppSection } from '@app/types/screen.type';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
    const { contextInjector } = useContext(InjectorContext);
    const { setContextLoader } = useContext(LoaderContext);

    const formRef = useRef<HTMLFormElement | null>(null);

    const location = useLocation();
    const navigate = useNavigate();

    const loginMinLength = 5;
    const loginMaxLength = 20;
    const passwordMinLength = 5;
    const passwordMaxLength = 50;

    async function handlerSubmit(event: any): Promise<void> {
        const form = formRef.current as HTMLFormElement;
        const login = form.login.value;
        const password = form.password.value;

        if (login.length < loginMinLength || login.length > loginMaxLength) {
            return form.login.classList.add('error');
        }

        if (
            password.length < passwordMinLength ||
            password.length > passwordMaxLength
        ) {
            form.login.classList.remove('error');
            return form.password.classList.add('error');
        }

        form.password.classList.remove('error');

        try {
            setContextLoader({ show: true });

            const result = await contextInjector.UserService.login(
                login,
                password,
            );

            if (!result.token) {
                throw 'No token received';
            }

            localStorage.setItem('login', login);
            localStorage.setItem('token', result.token);

            goSettings();
        } catch (error) {
            console.log(error);
        } finally {
            setContextLoader({ show: false });
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
        <div className="login">
            <form ref={formRef}>
                <input type="text" name="login" placeholder="Login" />
                <input type="password" name="password" placeholder="Password" />

                <Button
                    type={ButtonType.ARROW_PRIMARY}
                    size={ButtonSize.SMALL}
                    label="Log in"
                    onClick={handlerSubmit}
                />
            </form>
        </div>
    );
}
