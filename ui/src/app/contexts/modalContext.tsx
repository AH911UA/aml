/** @format */

import { ModalInitialData, iModal } from '@app/types/modal.type';
import React, { useState } from 'react';

interface ModalContextProviderProps {
    children: React.ReactNode;
}

interface ModalContextType {
    contextModal: iModal;
    setContextModal: React.Dispatch<React.SetStateAction<iModal>>;
}

export const ModalContext = React.createContext<ModalContextType>({
    contextModal: ModalInitialData,
    setContextModal: () => {},
});

export default function ModalContextProvider({
    children,
}: ModalContextProviderProps) {
    const [contextModal, setContextModal] = useState<iModal>(ModalInitialData);

    return (
        <ModalContext.Provider
            value={{
                contextModal,
                setContextModal,
            }}>
            {children}
        </ModalContext.Provider>
    );
}
