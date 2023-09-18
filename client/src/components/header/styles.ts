import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: ${MEASUREMENTS.HEADER.MAIN.HEIGHT};
	background-color: ${COLORS.BLACK};
	color: ${COLORS.MAIN};
`;

const StyledHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	width: 100%;
	max-width: 1080px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledMenu = styled.ul`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

export { StyledHeader, StyledHeaderContainer, StyledMenu };
