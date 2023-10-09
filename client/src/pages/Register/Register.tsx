import { createUserWithEmailAndPassword } from 'firebase/auth';

import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledRegister
} from './styles';
import { useForm } from 'react-hook-form';
import { auth } from '../../config/firebase.config';
import { Navigate } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { USERS_URLS } from '../../constants/urls';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import SocialLogin from '../../components/social-logIn/SocialLogin';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import InputContainer from '../../components/input-container/InputContainer';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../../components/text/Text';
import { USER_DEFAULT_VALUES } from '../../constants/userDefaultValues';
import Loading from '../../components/loading/Loading';
import Title from '../../components/title/Title';
import { setFetchInfo } from '../../interfaces/setFetchInfo';
import { getInitialUsername } from '../../utils/getInitialUsername';

type Inputs = {
	email: string;
	password: string;
};

const Register = () => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	const [firebaseErrors, setFirebaseErrors] = useState('');
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Inputs>({ mode: 'onBlur' });

	const { data, loading, error, setFetchInfo } = useFetch({
		url: USERS_URLS.ALL
	}) as {
		data: any[];
		loading: boolean;
		error: boolean;
		setFetchInfo: (value: setFetchInfo) => void;
	};

	if (currentUser) return <Navigate to={'/'} />;
	if (loading) return <Loading />;
	if (error) return <h2>Error</h2>;
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				color={COLORS.MAIN}
				text={'Register'}
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
			/>
			<SocialLogin setFetchInfo={setFetchInfo} />

			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit({ formData, e, setFetchInfo, data, setFirebaseErrors })
				)}
			>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.email}
					keyForm={'email'}
					label={'Email'}
					register={register}
					type={'text'}
				/>
				<InputContainer
					errors={errors}
					formValidation={FORM_VALIDATIONS.password}
					keyForm={'password'}
					label={'Password'}
					register={register}
					type={'password'}
				/>

				<PrimaryButton
					text={'Login'}
					bgcolor={COLORS.MAIN}
					color={COLORS.WHITE}
					align={MEASUREMENTS.ALIGN.CENTER}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLE}
				/>
			</form>
			<Text
				color={COLORS.MAIN}
				text={'Have an account?'}
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
			/>
			<SecondaryButton
				url={'/login'}
				text={'Login here'}
				color={COLORS.MAIN}
				align={MEASUREMENTS.ALIGN.CENTER}
			/>
		</PageComponent>
	);
};

interface OnSubmitProps {
	formData: Inputs;
	e: React.BaseSyntheticEvent;
	setFetchInfo: (value: setFetchInfo) => void;
	setFirebaseErrors: (error: string) => void;
	data: any[] | undefined;
}
const onSubmit = async ({
	formData,
	e,
	setFetchInfo,
	data,
	setFirebaseErrors
}: OnSubmitProps) => {
	if (!data) return;
	e.preventDefault();
	const { email, password } = formData;
	const userName = getInitialUsername(email);
	const emailUsed = data.find(user => user.email === email);
	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await setFetchInfo({
				url: USERS_URLS.CREATE_USER,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						email,
						userName,
						...USER_DEFAULT_VALUES
					}),
					headers: HEADERS
				}
			});
		} catch (error: any) {
			console.log(error);
			setFirebaseErrors(error.error);
		}
	}
};

export default Register;
