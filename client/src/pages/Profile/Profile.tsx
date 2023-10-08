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

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	if (!currentUser) <Navigate to={'/'} />;
	return (
		<PageComponent isBack>
			<div>
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
			</div>
			<PrimaryButton
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.WHITE}
				bgcolor={COLORS.UNACTIVE}
				setState={signOut}
				setValue={auth}
				text={'Logout'}
				url={'/'}
			/>
		</PageComponent>
	);
};

export default Profile;
