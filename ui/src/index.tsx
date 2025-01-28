/** @format */

import App from '@app/App';
import AppInfoContextProvider from './app/contexts/appInfoContext';
import InjectorContextProvider from './app/contexts/injectorContext';
import ModalContextProvider from '@app/contexts/modalContext';
import ReactDOM from 'react-dom/client';
import LoaderContextProvider from '@app/contexts/loaderContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <LoaderContextProvider>
        <InjectorContextProvider>
            <AppInfoContextProvider>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </AppInfoContextProvider>
        </InjectorContextProvider>
    </LoaderContextProvider>,
);
