import styled from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../../constants/colors';

const StyledImgItem = styled.img`
	height: 180px;
	width: 300px;
	object-fit: fill;
	cursor: pointer;
`;

interface SliderItemProps {
	margin: string | number;
}

const StyledSliderItem = styled.div<SliderItemProps>`
	position: relative;

	height: 300px;
	width: fit-content;
	min-width: 300px;
	overflow: hidden;
	background-color: ${COLORS.BLACK};
	margin-left: ${({ margin }) => margin};
	margin-right: ${({ margin }) => margin};

	@media screen and (min-width: 1024px) {
		height: 180px;
		width: 300px;

		:hover {
			height: 300px;
			width: fit-content;
			transition: all 0.3s ease-in-out;
		}
	}
`;

const StyledTitleContainer = styled.div`
	position: absolute;
	left: 0%;
	top: 100px;
	width: 300px;
	height: 85px;
	padding-top: 50px;
	padding-left: 0.2rem;
	padding-right: 0.2rem;
	background: ${SECONDARY_COLORS.SECONDARY_GRADIANT};
`;

const StyledInfoContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	width: 250px;
	gap: 0.5rem;
	margin-left: auto;
	margin-right: auto;
	padding-top: 1rem;
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
	StyledInfoHover,
	StyledTitleContainer
};
