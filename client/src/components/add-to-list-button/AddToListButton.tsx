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
import { MediaItem } from '../../interfaces/mediaItem';
import { CurrentUser } from '../../interfaces/user';

interface AddToListButtonProps {
	id: string;
	currentUser: CurrentUser | null | undefined;
}

const AddToListButton = ({ id, currentUser }: AddToListButtonProps) => {
	const navigate = useNavigate();

	const { data, loading, setFetchInfo } = useFetch<[MediaItem]>({
		url: currentUser ? USERS_URLS.GET_LIST_ITEMS + currentUser?.uid : ''
	});
	if (loading) return <LoadingCompact />;

	const isListed = Array.isArray(data)
		? data.some(item => item._id === id)
		: undefined;

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
