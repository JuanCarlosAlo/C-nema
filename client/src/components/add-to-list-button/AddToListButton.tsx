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
import { setFetchInfo } from '../../interfaces/setFetchInfo';
import LoadingCompact from '../loading-compact/LoadingCompact';
import Loading from '../loading/Loading';
import { MediaItem } from '../../interfaces/mediaItem';

interface AddToListButtonProps {
	id: string;
}

const AddToListButton = ({ id }: AddToListButtonProps) => {
	const authContext = useContext(AuthContext);
	const { currentUser, loadingFirebase } = authContext || {};
	const navigate = useNavigate();
	if (loadingFirebase) return <Loading />;
	const { data, loading, setFetchInfo } = useFetch<MediaItem[]>({
		url: USERS_URLS.GET_LIST_ITEMS + currentUser?.uid
	});
	if (loadingFirebase || loading) return <LoadingCompact />;
	const isListed = data?.some(item => item._id === id);
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
