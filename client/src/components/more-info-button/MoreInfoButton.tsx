import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import { useModalContext } from '../../context/Modal.context';
import { MediaItem } from '../../interfaces/mediaItem';
import MoreInfoModal from '../more-info-modal/MoreInfoModal';
import Icon from '../icon/Icon';
import { StyledMoreInfoButton } from './styles';

interface MoreInfoButtonProps {
	mediaItem?: MediaItem;
}

const MoreInfoButton = ({ mediaItem }: MoreInfoButtonProps) => {
	if (!mediaItem) return;
	const { setContent } = useModalContext();
	return (
		<StyledMoreInfoButton
			onClick={() =>
				setContent(<MoreInfoModal setContent={setContent} media={mediaItem} />)
			}
		>
			<Icon img='/images/plus-solid.svg' alt='more info icon' />
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.BLACK}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin={'auto'}
				nofullwidth={true}
				text={`info`}
			/>
		</StyledMoreInfoButton>
	);
};

export default MoreInfoButton;
