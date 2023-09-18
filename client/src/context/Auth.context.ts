import { createContext, useContext } from 'react';

interface AuthContextValues {
	content: any;
	setContent: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextValues | undefined>(
	undefined
);

export const useModalContext = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error(
			'useModalContext debe ser utilizado dentro de un ModalContextProvider'
		);
	}
	return context;
};
