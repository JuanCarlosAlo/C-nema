import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

interface StyledLogoProps {
	fontSize?: keyof typeof MEASUREMENTS.FONTS_SIZE;
}

const StyledLogo = styled(NavLink)<StyledLogoProps>`
	position: relative;
	font-family: Abnes;
	font-size: ${({ fontSize }) =>
		fontSize
			? MEASUREMENTS.FONTS_SIZE[fontSize]?.MOBILE
			: MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE};
	margin-top: ${({ fontSize }) =>
		fontSize
			? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.MOBILE} - 0.5rem)`
			: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE} - 0.5rem)`};
	margin-bottom: ${({ fontSize }) =>
		fontSize
			? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.MOBILE} - 0.5rem)`
			: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.MOBILE} - 0.5rem)`};
	@media screen and (min-width: 768px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.TABLET
				: MEASUREMENTS.FONTS_SIZE.TEXT.TABLET};
		margin-top: ${({ fontSize }) =>
			fontSize
				? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.TABLET} - 0.5rem)`
				: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET} - 0.5rem)`};
		margin-bottom: ${({ fontSize }) =>
			fontSize
				? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.TABLET} - 0.5rem)`
				: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.TABLET} - 0.5rem)`};
	}
	@media screen and (min-width: 1024px) {
		font-size: ${({ fontSize }) =>
			fontSize
				? MEASUREMENTS.FONTS_SIZE[fontSize]?.DESKTOP
				: MEASUREMENTS.FONTS_SIZE.TEXT.DESKTOP};
		margin-top: ${({ fontSize }) =>
			fontSize
				? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.DESKTOP} - 0.5rem)`
				: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.DESKTOP} - 0.5rem)`};
		margin-bottom: ${({ fontSize }) =>
			fontSize
				? `calc(${MEASUREMENTS.FONTS_SIZE[fontSize]?.DESKTOP} - 0.5rem)`
				: `calc(${MEASUREMENTS.FONTS_SIZE.TEXT.DESKTOP} - 0.5rem)`};
	}
`;

export { StyledLogo };
