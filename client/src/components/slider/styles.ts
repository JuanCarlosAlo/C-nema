import styled from 'styled-components';

const SliderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
`;
const StyledSlider = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;

	overflow-x: scroll;
	overflow-y: visible;
	width: 100%;
	height: 320px;
`;

export { StyledSlider, SliderContainer };
