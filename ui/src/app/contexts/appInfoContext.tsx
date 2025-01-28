/** @format */

import { AppInfoInitialData, iAppInfo } from '@app/types/app.type';
import React, { useState } from 'react';

interface AppInfoContextProviderProps {
    children: React.ReactNode;
}

interface AppInfoContextType {
    contextAppInfo: iAppInfo;
    setContextAppInfo: React.Dispatch<React.SetStateAction<iAppInfo>>;
}

export const AppInfoContext = React.createContext<AppInfoContextType>({
    contextAppInfo: AppInfoInitialData,
    setContextAppInfo: () => {},
});

export default function AppInfoContextProvider({
    children,
}: AppInfoContextProviderProps) {
    const [contextAppInfo, setContextAppInfo] =
        useState<iAppInfo>(AppInfoInitialData);

    return (
        <AppInfoContext.Provider
            value={{
                contextAppInfo,
                setContextAppInfo,
            }}>
            {children}
        </AppInfoContext.Provider>
    );
}
