import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';

const StyledIcon = styled.img`
	height: ${MEASUREMENTS.ICONS.MOBILE.HEIGHT};
	width: ${MEASUREMENTS.ICONS.MOBILE.WIDTH};
	@media screen and (min-width: 868px) {
		height: ${MEASUREMENTS.ICONS.TABLET.HEIGHT};
		width: ${MEASUREMENTS.ICONS.TABLET.WIDTH};
	}
	@media screen and (min-width: 1024px) {
		height: ${MEASUREMENTS.ICONS.DESKTOP.HEIGHT};
		width: ${MEASUREMENTS.ICONS.DESKTOP.WIDTH};
	}
`;

export { StyledIcon };
