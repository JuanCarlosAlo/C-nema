import { useContext } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import { AuthContext } from '../../context/Auth.context';

const Profile = () => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	return (
		<PageComponent isBack>
			<p>{currentUser?.userName}</p>
		</PageComponent>
	);
};

export default Profile;
