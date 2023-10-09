import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

interface StyledTexteProps {
	text?: string;
	fontSize: keyof typeof MEASUREMENTS.FONTS_SIZE;
	align?: string;
	margin?: string;
	nofullwidth?: boolean;
	color?: string;
}

const StyledText = styled.p<StyledTexteProps>`
	color: ${({ color }) => color};
	text-align: ${({ align }) => {
		if (align) {
			return align;
		} else {
			return 'left';
		}
	}};
	word-wrap: break-word;
	text-overflow: ellipsis;

	width: ${({ nofullwidth }) => {
		if (!nofullwidth) {
			return '100%';
		} else {
			return 'fit-content';
		}
	}};
	font-size: ${({ fontSize }) =>
		fontSize
			? MEASUREMENTS.FONTS_SIZE[fontSize]?.MOBILE
			: MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE};
	margin-top: ${({ fontSize, margin }) => {
		if (margin !== 'auto') {
			return margin;
		} else {
			return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)`;
		}
	}};
	margin-bottom: ${({ fontSize, margin }) => {
		if (margin !== 'auto') {
			return margin;
		} else {
			return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].MOBILE} - 0.5rem)`;
		}
	}};
	@media screen and (min-width: 868px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.TABLET
				: MEASUREMENTS.FONTS_SIZE.TITLE.TABLET};
		margin-top: ${({ margin, fontSize }) => {
			if (margin !== 'auto') {
				return margin;
			} else {
				return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].TABLET} - 0.5rem)`;
			}
		}};
		margin-bottom: ${({ margin, fontSize }) => {
			if (margin !== 'auto') {
				return margin;
			} else {
				return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].TABLET} - 0.5rem)`;
			}
		}};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.DESKTOP
				: MEASUREMENTS.FONTS_SIZE.TITLE.DESKTOP};
		margin-top: ${({ margin, fontSize }) => {
			if (margin !== 'auto') {
				return margin;
			} else {
				return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP} - 0.5rem)`;
			}
		}};
		margin-bottom: ${({ margin, fontSize }) => {
			if (margin !== 'auto') {
				return margin;
			} else {
				return `calc(${MEASUREMENTS.FONTS_SIZE[fontSize].DESKTOP} - 0.5rem)`;
			}
		}};
	}
`;

export { StyledText };
