/** @format */

import './App.scss';
import Router from './services/navigation.service';
import { useContext, useEffect } from 'react';
import { AppInfoContext } from './contexts/appInfoContext';
import Modal from './components/common/modal/Modal';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InjectorContext } from './contexts/injectorContext';
import Loader from './components/common/loader/Loader';
import { LoaderContext } from './contexts/loaderContext';

export default function App() {
    const { contextInjector } = useContext(InjectorContext);
    const { setContextLoader } = useContext(LoaderContext);
    const { contextAppInfo, setContextAppInfo } = useContext(AppInfoContext);

    const timeoutTime = 2;

    useEffect(() => {
        getAppInfo();

        Aos.init();
    }, []);

    useEffect(() => {
        document.title = contextAppInfo.project.fullName;
    }, [contextAppInfo]);

    async function getAppInfo(): Promise<void> {
        try {
            setContextLoader({ show: false });
            // setContextLoader({ show: true });

            const info = await contextInjector.AppInfoService.get();

            setContextAppInfo(info);

            // setContextLoader({ show: false });
        } catch (error) {
            console.log('getAppInfo error: ', error);

            setTimeout(() => {
                getAppInfo();
            }, timeoutTime * 1000);
        }
    }

    return (
        <div className={`app`}>
            <main>
                <Router />
            </main>

            <Loader />
        </div>
    );
}
