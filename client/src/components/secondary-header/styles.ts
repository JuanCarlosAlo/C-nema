import styled from 'styled-components';

import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

interface SecondaryHeaderProps {
	url: string | undefined;
	text?: string;
	state?: {};
	secondaryUrl?: string;
}

const StyledSecondaryHeader = styled.div<SecondaryHeaderProps>`
	display: flex;
	align-items: center;
	position: absolute;
	top: ${MEASUREMENTS.HEADER.MAIN.HEIGHT};
	height: ${({ url }) => {
		if (url) {
			return ` ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.DESKTOP}`;
		} else {
			return ` ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.MOBILE}`;
		}
	}};
	background-color: ${COLORS.BLACK_TRANSPARENT};
	width: 100%;
	@media screen and (min-width: 768px) {
		height: ${MEASUREMENTS.HEADER.SECONDARY.HEIGHT.DESKTOP};
	}
	z-index: 10;
`;

const StyledSecondaryHeaderContainer = styled.div<SecondaryHeaderProps>`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	justify-content: ${({ url }) => {
		if (url) {
			return 'space-between';
		} else {
			return 'space-evenly';
		}
	}};
	padding-left: calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	padding-right: calc(${MEASUREMENTS.PADDING.MOBILE_OUTSIDE} * 2);
	width: 100%;
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
`;
export { StyledSecondaryHeader, StyledSecondaryHeaderContainer };
