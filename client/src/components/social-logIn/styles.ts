import styled from 'styled-components';
import { COLORS } from '../../constants/colors';


const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	padding: 0.5rem;
	width: 250px;
	margin-bottom: 2rem;
	border: none;
	color: ${COLORS.WHITE};
	background-color: ${COLORS.MAIN};
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.WHITE};
		color: ${COLORS.MAIN};
	
	}
`;

const StyledButtonIcon = styled.img`
	width: 30px;
`;

export { StyledButton, StyledButtonIcon };
