import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

interface StyledButtonProps {
	color: string;
	border?: boolean;
	bgcolor?: string;
}

interface StyledButtonContainerProps {
	align?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
	background-color: transparent;
	color: ${({ color }) => color};
	border: ${({ border }) => {
		if (border) {
			return `2px solid ${COLORS.MAIN}`;
		} else {
			return 'none';
		}
	}};
	background-color: ${({ bgcolor }) => bgcolor};
	width: 70px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	font-weight: ${MEASUREMENTS.FONTS_WEIGHT.NORMAL};
	font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE};
	margin-bottom: 1rem;
	cursor: pointer;
	&:hover {
		color: ${COLORS.MAIN_HOVER};
		border: none;
	}
	@media screen and (min-width: 468px) {
		font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET};
		width: 100px;
	}
	@media screen and (min-width: 1024px) {
		font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.DESKTOP};
	}
`;

const StyledButtonContainer = styled.div<StyledButtonContainerProps>`
	display: flex;
	justify-content: ${({ align }) => {
		if (align === 'CENTER') {
			return 'center';
		}
		if (align === 'LEFT') {
			return 'flex start';
		}
		if (align === 'RIGHT') {
			return 'flex end';
		}
	}};
`;

export { StyledButton, StyledButtonContainer };
