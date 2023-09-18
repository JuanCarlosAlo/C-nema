import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import Text from '../text/Text';

const AddToListButton = () => {
	return (
		<div>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
				margin={'auto'}
				nofullwidth={true}
				text={`Add To list`}
			/>
		</div>
	);
};

export default AddToListButton;
