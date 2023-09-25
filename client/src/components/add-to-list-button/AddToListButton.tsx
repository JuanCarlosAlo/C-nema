import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import { StyledAddButton } from './styles';

const AddToListButton = () => {
	return (
		<StyledAddButton>
			<Icon img='/images/plus-solid.svg' alt='add icon' />
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.BLACK}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin={'auto'}
				nofullwidth={true}
				text={`Add To list`}
			/>
		</StyledAddButton>
	);
};

export default AddToListButton;
