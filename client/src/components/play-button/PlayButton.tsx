import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import { StyledPlayButton } from './styles';

interface MoreInfoModalProps {
	media: {
		media: string;
		id: string;
	}[];
	index: number;
	setValue?: (value: any) => void;
}

const PlayButton = ({ media, index, setValue }: MoreInfoModalProps) => {
	const navigate = useNavigate();

	return (
		<StyledPlayButton
			onClick={() => {
				if (setValue) setValue(null);
				navigate('/video/' + media[index].id, { state: { media, index } });
			}}
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

export default PlayButton;
