import { createContext, useContext } from 'react';
import { CurrentUser } from '../interfaces/user';

interface AuthContextValues {
	currentUser: CurrentUser | null;
	loadingFirebase: boolean;
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
