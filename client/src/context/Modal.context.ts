import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalContextValues {
	content: any;
	setContent: React.Dispatch<any>;
}

export const ModalContext = createContext<ModalContextValues | undefined>(
	undefined
);

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (context === undefined) {
		throw new Error(
			'useModalContext debe ser utilizado dentro de un ModalContextProvider'
		);
	}
	return context;
};
