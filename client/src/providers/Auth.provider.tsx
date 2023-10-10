import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/Auth.context';
import { USERS_URLS } from '../constants/urls';

interface User {
	uid: string;
	email: String;
	userName: String;
	type: String;
	savedMedia: any;
	watched: any;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [attempts, setAttempts] = useState<number>(0);
	const [loadingFirebase, setLoadingFirebase] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			if (user) {
				await getUserInfoFromMongo(user, setCurrentUser, attempts, setAttempts);
			} else {
				setCurrentUser(null);
			}
			setLoadingFirebase(false);
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const socket = io('https://c-nema-server.onrender.com/');

		socket.on('collectionUsersChange', async (change: any) => {
			switch (change.operationType) {
				case 'update':
					await getUserInfoFromMongo(
						currentUser!,
						setCurrentUser,
						attempts,
						setAttempts
					);
					break;
				default:
					break;
			}
		});

		socket.emit('startCollectionListener');

		return () => {
			socket.disconnect();
		};
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, loadingFirebase }}>
			{children}
		</AuthContext.Provider>
	);
};

const getUserInfoFromMongo = async (
	user: any,
	setCurrentUser: (user: User | null) => void,
	attempts: number,
	setAttempts: (attempts: number) => void
) => {
	try {
		const response = await fetch(`${USERS_URLS.GET_USER_BY_ID}${user.uid}`);

		if (response.ok) {
			const userInfo = await response.json();

			setCurrentUser({
				...user,
				...userInfo
			});
			setAttempts(0);
		} else {
			throw new Error('Error al obtener la información del usuario');
		}
	} catch (error) {
		if (attempts < 5) {
			setTimeout(
				() =>
					getUserInfoFromMongo(user, setCurrentUser, attempts + 1, setAttempts),
				1000
			);
		}
	}
};

export default AuthProvider;
