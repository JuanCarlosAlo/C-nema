import { useForm } from 'react-hook-form';
import {
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledSignIn
} from './styles';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

import SocialLogin from '../../components/social-logIn/SocialLogin';
import { useFetch } from '../../hooks/useFetch';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { useState } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import Title from '../../components/title/Title';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import InputContainer from '../../components/input-container/InputContainer';
import PrimaryButton from '../../components/primary-button/PrimaryButton';

type Inputs = {
	email: string;
	password: string;
};

const Login = () => {
	const [firebaseErrors, setFirebaseErrors] = useState('');
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Inputs>({ mode: 'onBlur' });
	const navigate = useNavigate();
	const { setFetchInfo } = useFetch({ url: '' });
	return (
		<PageComponent isBack={true}>
			<Secondaryheader url={'/'} />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Login'}
			/>
			<SocialLogin setFetchInfo={setFetchInfo} />
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit({ formData, e, navigate, setFirebaseErrors })
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
				text={'Dont have an account?'}
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
			/>
			<SecondaryButton
				url={'/register'}
				text={'Register here'}
				color={COLORS.MAIN}
				align={MEASUREMENTS.ALIGN.CENTER}
			/>
		</PageComponent>
	);
};

interface OnSubmitProps {
	formData: Inputs;
	e: React.BaseSyntheticEvent;
	navigate: (value: any) => void;
	setFirebaseErrors: (error: any) => void;
}

const onSubmit = async ({
	formData,
	e,
	navigate,
	setFirebaseErrors
}: OnSubmitProps) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (error: any) {
		setFirebaseErrors(error.error);
	}
};

export default Login;
