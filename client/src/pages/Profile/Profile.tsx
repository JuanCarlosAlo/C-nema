import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import { AuthContext } from '../../context/Auth.context';
import { Navigate } from 'react-router-dom';
import Text from '../../components/text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import PrimaryButton from '../../components/primary-button/PrimaryButton';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useModalContext } from '../../context/Modal.context';
import DeleteAccountModal from '../../components/delete-account-modal/DeleteAccountModal';
import { StlyedProfieInfo, StyledButtonsContainer } from './styles';

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	const { setContent } = useModalContext();

	if (!currentUser) return <Navigate to={'/'} />;
	return (
		<PageComponent isBack>
			<StlyedProfieInfo>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth
					text={`Username : ${currentUser?.userName}`}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth
					text={`Email : ${currentUser?.email}`}
				/>
			</StlyedProfieInfo>
			<StyledButtonsContainer>
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					bgcolor={COLORS.MAIN}
					setState={signOut}
					setValue={auth}
					text={'Logout'}
					url={'/'}
				/>
				<PrimaryButton
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.WHITE}
					bgcolor={COLORS.MAIN}
					setState={setContent}
					setValue={
						<DeleteAccountModal
							setContent={setContent}
							currentUser={currentUser}
						/>
					}
					text={'Delete Account'}
				/>
			</StyledButtonsContainer>
		</PageComponent>
	);
};

export default Profile;
