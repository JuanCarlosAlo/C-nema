import { MEASUREMENTS } from '../../constants/measurements';
import { StyledTitle } from './styles';

interface TitletProps {
	text?: string;
	align?: string;
	margin?: string;
	nofullwidth?: boolean;
	color?: string;
	fontSize?: keyof typeof MEASUREMENTS.FONTS_SIZE;
}

const Title = ({ text, fontSize, align, margin, color }: TitletProps) => {
	return (
		<StyledTitle
			align={align}
			fontSize={fontSize}
			margin={margin}
			color={color}
		>
			{text}
		</StyledTitle>
	);
};

export default Title;
