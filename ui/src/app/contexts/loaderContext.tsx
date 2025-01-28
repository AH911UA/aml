/** @format */

import { LoaderInitialData, iLoader } from '@app/types/loader.type';
import React, { useState } from 'react';

interface LoaderContextProviderProps {
    children: React.ReactNode;
}

interface LoaderContextType {
    contextLoader: iLoader;
    setContextLoader: React.Dispatch<React.SetStateAction<iLoader>>;
}

export const LoaderContext = React.createContext<LoaderContextType>({
    contextLoader: LoaderInitialData,
    setContextLoader: () => {},
});

export default function LoaderContextProvider({
    children,
}: LoaderContextProviderProps) {
    const [contextLoader, setContextLoader] =
        useState<iLoader>(LoaderInitialData);

    return (
        <LoaderContext.Provider
            value={{
                contextLoader,
                setContextLoader,
            }}>
            {children}
        </LoaderContext.Provider>
    );
}
