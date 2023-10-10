import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledEpisodeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 1rem;
	background-color: ${COLORS.UNACTIVE};
	height: 150px;
	padding-left: 1rem;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.ACTIVE};
	}
`;

const StyledSeasonImg = styled.img`
	height: 100px;
	@media screen and (min-width: 768px) {
		height: 150px;
	}
`;

const StyledDescriptionContainer = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
	}
`;

export { StyledDescriptionContainer, StyledEpisodeContainer, StyledSeasonImg };
