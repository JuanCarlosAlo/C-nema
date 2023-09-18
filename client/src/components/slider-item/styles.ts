import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledImgItem = styled.img`
	height: 150px;
	cursor: pointer;
`;

const StyledSliderItem = styled.div`
	height: 150px;
	width: 250px;
	overflow: hidden;
	background-color: ${COLORS.BLACK};
	:hover {
		height: 250px;
		width: fit-content;
		transform: scale(1.3);
		transition: all 0.3s ease-in-out;
	}
`;

const StyledInfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	width: 250px;
	gap: 0.5rem;
	padding-top: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
`;

const StyledInfoHover = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
`;

export {
	StyledSliderItem,
	StyledImgItem,
	StyledInfoContainer,
	StyledInfoHover
};
