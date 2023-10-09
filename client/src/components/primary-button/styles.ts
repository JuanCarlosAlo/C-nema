import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

interface StyledButtonProps {
	color: string;
	border?: boolean;
	bgcolor?: string;
}

const StyledPrimaryButton = styled.button<StyledButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${({ bgcolor }) => bgcolor};
	outline: none;
	border: none;
	color: ${({ color }) => color};
	width: 100%;
	height: 1.5rem;
	font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE};
	margin-bottom: 1rem;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.MAIN};
	}
	@media screen and (min-width: 780px) {
		font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.DESKTOP};
	}
`;

export { StyledPrimaryButton };
