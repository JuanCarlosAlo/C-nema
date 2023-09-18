import { MEASUREMENTS } from '../../constants/measurements';
import { StyledText } from './styles';

interface TextProps {
	text?: string;
	fontSize?: keyof typeof MEASUREMENTS.FONTS_SIZE;
	align?: string;
	margin?: string;
	nofullwidth?: boolean;
	color?: string;
}

const Text = ({ text, color, fontSize, align, nofullwidth }: TextProps) => {
	return (
		<StyledText
			color={color}
			align={align}
			fontSize={fontSize}
			nofullwidth={nofullwidth}
		>
			{text}
		</StyledText>
	);
};

export default Text;
