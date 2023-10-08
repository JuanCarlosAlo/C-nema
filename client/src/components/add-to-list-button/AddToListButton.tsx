import { useContext, useEffect } from 'react';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { USERS_URLS } from '../../constants/urls';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import { StyledAddButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import Loading from '../loading/Loading';
import { setFetchInfo } from '../../interfaces/setFetchInfo';

interface AddToListButtonProps {
	id: string;
}

interface UserListData {
	listedItems: {
		_id: string;
		date: number;
	}[];
	type: string;
	userId: string;
	_id: string;
}

const AddToListButton = ({ id }: AddToListButtonProps) => {
	const authContext = useContext(AuthContext);
	const { currentUser, loadingFirebase } = authContext || {};
	const navigate = useNavigate();

	const { data, loading, setFetchInfo } = useFetch<UserListData>({
		url: USERS_URLS.GET_LIST + currentUser?.uid
	});

	if (loadingFirebase || loading) return <Loading />;
	const isListed = data?.listedItems.some(item => item._id === id);
	return (
		<StyledAddButton
			onClick={() => {
				if (!currentUser) {
					navigate('/register');
				} else {
					handleClick({ setFetchInfo, currentUserId: currentUser.uid, id });
				}
			}}
		>
			<Icon img='/images/plus-solid.svg' alt='add icon' />
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.BLACK}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin={'auto'}
				nofullwidth={true}
				text={isListed ? 'Listed' : 'Add to list'}
			/>
		</StyledAddButton>
	);
};

interface handleClickProps {
	setFetchInfo: (value: setFetchInfo) => void;
	currentUserId: string;
	id: string;
}

const handleClick = async ({
	setFetchInfo,
	currentUserId,
	id
}: handleClickProps) => {
	await setFetchInfo({
		url: USERS_URLS.ADD_TO_LIST + currentUserId,
		options: {
			method: METHODS.POST,
			body: JSON.stringify({ id }),
			headers: HEADERS
		}
	});
};

export default AddToListButton;
