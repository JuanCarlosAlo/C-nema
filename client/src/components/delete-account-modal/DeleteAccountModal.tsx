import React, { ReactNode } from 'react';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';

import { useForm } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import InputContainer from '../input-container/InputContainer';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import {
	EmailAuthProvider,
	deleteUser,
	getAuth,
	reauthenticateWithCredential
} from 'firebase/auth';
import { setFetchInfo } from '../../interfaces/setFetchInfo';
import { CurrentUser } from '../../interfaces/user';
import { HEADERS } from '../../constants/headers';
import { USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { Navigate } from 'react-router-dom';
import PrimaryButton from '../primary-button/PrimaryButton';
import Title from '../title/Title';
import { StyledDeleteModal } from './styles';
import SocialDeleteAccount from '../SocialDeleteAccount/SocialDeleteAccount';

type Inputs = {
	email: string;
	password: string;
};

interface DeleteAccountModalProps {
	setContent: (value: null | ReactNode) => void;
	currentUser: CurrentUser;
}

const DeleteAccountModal = ({
	setContent,
	currentUser
}: DeleteAccountModalProps) => {
	const { setFetchInfo } = useFetch({ url: '' });
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Inputs>({ mode: 'onBlur' });
	if (!currentUser) return <Navigate to={'/'} />;
	return (
		<StyledDeleteModal>
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				text={'Delete Account'}
				color={COLORS.MAIN}
			/>
			<SocialDeleteAccount
				currentUser={currentUser}
				setFetchInfo={setFetchInfo}
				setContent={setContent}
			/>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit({ formData, e, setFetchInfo, currentUser })
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
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					text={'Delete'}
					bgcolor={COLORS.MAIN}
				/>
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					text={'Cancel'}
					bgcolor={COLORS.MAIN}
					setState={setContent}
					setValue={null}
				/>
			</form>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.RED}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
				margin='auto'
				nofullwidth={false}
				text={
					'Important note: Once you click yes everything regarding your account will be deleted'
				}
			/>
		</StyledDeleteModal>
	);
};

interface OnSubmitProps {
	formData: Inputs;
	e: React.FormEvent<HTMLFormElement>;
	setFetchInfo: (value: setFetchInfo) => void;
	currentUser: CurrentUser;
	// setFirebaseErrors: (error: string) => void;
}

const onSubmit = async ({
	formData,
	e,
	setFetchInfo,
	currentUser
}: OnSubmitProps) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		const auth = await getAuth();
		const user = await auth.currentUser;

		const credential = EmailAuthProvider.credential(email, password);
		if (!user) return <Navigate to={'/'} />;
		// Volver a autenticar al usuario
		await reauthenticateWithCredential(user, credential);

		// Eliminar la cuenta del usuario
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
			await deleteUser(user);
		} catch (error) {
			console.log(error);
		}
	} catch (error) {}
};

export default DeleteAccountModal;
