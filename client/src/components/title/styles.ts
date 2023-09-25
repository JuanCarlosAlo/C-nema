import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

interface StyledTitleProps {
	align?: string;
	fontSize?: keyof typeof MEASUREMENTS.FONTS_SIZE;
	margin?: string;
}

const StyledTitle = styled.p<StyledTitleProps>`
	color: ${COLORS.WHITE};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	font-size: ${({ fontSize }) =>
		fontSize
			? MEASUREMENTS.FONTS_SIZE[fontSize]?.MOBILE
			: MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE};
	margin-top: ${({ margin }) => margin};
	margin-bottom: ${({ margin }) => margin};
	width: 100%;

	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.TABLET
				: MEASUREMENTS.FONTS_SIZE.TITLE.TABLET};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.DESKTOP
				: MEASUREMENTS.FONTS_SIZE.TITLE.DESKTOP};
	}
`;

export { StyledTitle };
