import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import { StyledPlayButton } from './styles';
import { useFetch } from '../../hooks/useFetch';
import { MOVIES_URLS, SHOWS_URLS, USERS_URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { MediaItem } from '../../interfaces/mediaItem';
import { getPlayButtonProps } from '../../utils/getPlayButtonProps';
import { setFetchInfo } from '../../interfaces/setFetchInfo';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { CurrentUser } from '../../interfaces/user';

interface MoreInfoModalProps {
	mediaItem: MediaItem;
	index: number;
	setValue?: (value: any) => void;
}

const PlayButton = ({ mediaItem, index, setValue }: MoreInfoModalProps) => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	const { setFetchInfo } = useFetch({
		url: ''
	});
	const media = getPlayButtonProps(mediaItem);

	return (
		<StyledPlayButton
			onClick={() =>
				handleClick({
					setValue,
					index,
					setFetchInfo,
					mediaItem,
					media,
					currentUser
				})
			}
		>
			<Icon img='/images/play-solid.svg' alt='play button' />
			<Text
				align={MEASUREMENTS.ALIGN.LEFT}
				color={COLORS.BLACK}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin='auto'
				nofullwidth={true}
				text={'Play'}
			/>
		</StyledPlayButton>
	);
};

interface handleClickProps {
	mediaItem: MediaItem;
	media: {
		media: string;
		id: string;
	}[];
	index: number;
	setValue?: (value: any) => void;
	setFetchInfo: (value: setFetchInfo) => void;
	currentUser: CurrentUser | undefined | null;
}

const handleClick = async ({
	setValue,
	index,
	setFetchInfo,
	mediaItem,
	media,
	currentUser
}: handleClickProps) => {
	const urlToFetch =
		mediaItem.type === 'movie' ? MOVIES_URLS.ADD_VIEW : SHOWS_URLS.ADD_VIEW;

	try {
		if (currentUser) {
			setFetchInfo({
				url: USERS_URLS.ADD_TO_WATCHED + currentUser.uid,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({ id: mediaItem._id }),
					headers: HEADERS
				}
			});
		}
		setFetchInfo({
			url: urlToFetch,
			options: {
				method: METHODS.POST,
				body: JSON.stringify({ id: mediaItem._id }),
				headers: HEADERS
			},
			navigateTo: {
				url: '/video/' + media[index].id,
				state: { media, index }
			}
		});

		if (setValue) setValue(null);
	} catch (error) {
		console.error(error);
	}
};

export default PlayButton;
