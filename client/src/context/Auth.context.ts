import { createContext, useContext } from 'react';

interface User {
	uid: string;
	email: String;
	userName: String;
	type: String;
	savedMedia: any;
	watched: any;
}

interface AuthContextValues {
	currentUser: User | null;
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
