import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledSeasonContainer = styled.div`
	margin-bottom: 2rem;
`;

const StyledTitleSelectContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledSelect = styled.select`
	width: 200px;
	padding: 8px;
	border: none;

	background-color: ${COLORS.MAIN};
	color: ${COLORS.WHITE};
	font-size: 1rem;
	&:focus {
		outline: none;
	}

	& option {
		background-color: ${COLORS.MAIN};
		color: ${COLORS.WHITE};
		font-size: 1rem;
		&:hover {
			background-color: ${COLORS.WHITE};
			color: ${COLORS.MAIN};
		}
		&:focus {
			outline: none;
		}
	}
`;

export { StyledTitleSelectContainer, StyledSeasonContainer, StyledSelect };
