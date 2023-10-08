import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { StyledButton, StyledButtonIcon } from './styles';
import { USERS_URLS } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { getInitialUsername } from '../../utils/getInitialUsername';
import { USER_DEFAULT_VALUES } from '../../constants/userDefaultValues';
import { SetFetchInfoFunction } from '../../types/setFetchInfo';
import { setFetchInfo } from '../../interfaces/setFetchInfo';

interface SocialLoginProps {
	setFetchInfo: (value: setFetchInfo) => void;
}

const SocialLogin = ({ setFetchInfo }: SocialLoginProps) => {
	return (
		<StyledButton onClick={() => registerWithGoogle({ setFetchInfo })}>
			Continue in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

interface RegisterWithGoogleProps {
	setFetchInfo: (value: setFetchInfo) => void;
}

const registerWithGoogle = async ({
	setFetchInfo
}: RegisterWithGoogleProps) => {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const userName = getInitialUsername(result.user.email);

		await setFetchInfo({
			url: USERS_URLS.CREATE_USER,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({
					_id: result.user.uid,
					userName,
					address: 'none',
					email: result.user.email,
					...USER_DEFAULT_VALUES
				}),
				headers: HEADERS
			},
			navigateTo: {
				url: '/'
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export default SocialLogin;
