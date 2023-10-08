import styled from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../../constants/colors';

const StyledMorInfoModal = styled.div`
	width: 100vw;
	max-width: 900px;
	height: 80vh;
	overflow-y: overlay;
	scrollbar-gutter: stable;
	padding: 0;
`;

const StyledCrossContainer = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;
	background-color: ${COLORS.MAIN};
	padding: 8px;
	border-radius: 50%;
	cursor: pointer;
`;
const StyledCoverContainer = styled.div`
	position: relative;
	height: fit-content;
	::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		height: 50%;
		width: 100%;
		background: ${SECONDARY_COLORS.SECONDARY_GRADIANT};
	}
`;

const StyledTitleContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	width: 100%;
	padding-bottom: 1rem;
	padding-left: 1rem;
	bottom: 0;
	left: 0;
	z-index: 10;
`;

const StyledCoverInfo = styled.img`
	width: 100%;
	height: 450px;
	object-fit: cover;
`;

const StyledInfoContainer = styled.div`
	padding-top: 1rem;
	padding-left: 1rem;
	padding-right: 1rem;
`;

const StyledInfoGap = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	column-gap: 2rem;
`;

export {
	StyledMorInfoModal,
	StyledCoverInfo,
	StyledCoverContainer,
	StyledCrossContainer,
	StyledTitleContainer,
	StyledInfoGap,
	StyledInfoContainer
};
