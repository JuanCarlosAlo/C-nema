import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledPlayButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.3rem;
	background-color: ${COLORS.MAIN};
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	cursor: pointer;
	&:hover {
		-webkit-box-shadow: 0px 0px 15px 0px ${COLORS.MAIN};
		-moz-box-shadow: 0px 0px 15px 0px ${COLORS.MAIN};
		box-shadow: 0px 0px 15px 0px ${COLORS.MAIN};
		transition: all 0.2s ease-in-out;
	}
`;

export { StyledPlayButton };
