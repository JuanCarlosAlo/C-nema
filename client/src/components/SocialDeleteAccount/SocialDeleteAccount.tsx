import {
	GoogleAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential,
	signInWithPopup
} from 'firebase/auth';

import { StyledButton, StyledButtonIcon } from './styles';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { setFetchInfo } from '../../interfaces/setFetchInfo';
import { CurrentUser } from '../../interfaces/user';
import { USERS_URLS } from '../../constants/urls';
import { Navigate } from 'react-router-dom';

interface SocialDeleteAccountProps {
	setFetchInfo: (value: setFetchInfo) => void;
	currentUser: CurrentUser;
	setContent: (value: any) => void;
}

const SocialDeleteAccount = ({
	setFetchInfo,
	currentUser,
	setContent
}: SocialDeleteAccountProps) => {
	return (
		<StyledButton
			onClick={() =>
				DeleteWithGoogle({ setFetchInfo, currentUser, setContent })
			}
		>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

const DeleteWithGoogle = async ({
	setFetchInfo,
	currentUser,
	setContent
}: SocialDeleteAccountProps) => {
	const provider = new GoogleAuthProvider();
	const auth = await getAuth();
	const user = await auth.currentUser;
	if (!user) return <Navigate to={'/'} />;
	try {
		await setFetchInfo({
			url: USERS_URLS.DELETE_USER + currentUser.uid,
			options: {
				method: METHODS.DELETE,
				body: JSON.stringify({}),
				headers: HEADERS
			},
			navigateTo: { url: '/' }
		});
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		if (!credential) return <Navigate to={'/'} />;
		setContent(null);
		await reauthenticateWithCredential(user, credential);
		await deleteUser(user);
	} catch (error) {
		console.log(error);
		// An error ocurred
		// ...
	}
};

export default SocialDeleteAccount;
