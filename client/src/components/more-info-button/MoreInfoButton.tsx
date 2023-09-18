import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';
import { useModalContext } from '../../context/Modal.context';
import { MediaItem } from '../../interfaces/mediaItem';
import MoreInfoModal from '../more-info-modal/MoreInfoModal';

interface MoreInfoButtonProps {
	mediaItem?: MediaItem;
}

const MoreInfoButton = ({ mediaItem }: MoreInfoButtonProps) => {
	const { setContent } = useModalContext();
	return (
		<div
			onClick={() =>
				setContent(<MoreInfoModal setContent={setContent} info={mediaItem} />)
			}
		>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin={'auto'}
				nofullwidth={true}
				text={`More info`}
			/>
		</div>
	);
};

export default MoreInfoButton;
