import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
const StyledFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	padding-right: ${MEASUREMENTS.PADDING.MOBILE_OUTSIDE};
	height: ${MEASUREMENTS.FOOTER.HEIGHT};
	background-color: ${COLORS.BLACK};
	color: ${COLORS.MAIN};
`;

export { StyledFooter };
