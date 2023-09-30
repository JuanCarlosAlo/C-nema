import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledBackButton = styled.div`
	position: absolute;
	top: 1rem;
	left: 3rem;
	border: 1px solid ${COLORS.WHITE};
	border-radius: 50%;
	padding: 0.5rem;
	z-index: 10;
	opacity: 0;
	transition: opacity 0.2s ease-in-out;
	cursor: pointer;
`;
const StyledVideoPlayerContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	&:hover {
		${StyledBackButton} {
			opacity: 1;
		}
	}
`;

const VideoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 100%;
`;

const StyledVideo = styled.video`
	width: 100%;
	max-height: calc(
		${MEASUREMENTS.PAGES.HEIGHT} -
			calc(${MEASUREMENTS.HEADER.MAIN.HEIGHT} + ${MEASUREMENTS.FOOTER.HEIGHT})
	);
`;

const StyledEpisodeButton = styled.div`
	position: absolute;
	bottom: 3rem;
	right: 2rem;
	padding: 0.5rem;
	background-color: ${COLORS.MAIN};
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		background-color: ${COLORS.MAIN_HOVER};
	}
`;

export {
	VideoContainer,
	StyledVideo,
	StyledVideoPlayerContainer,
	StyledEpisodeButton,
	StyledBackButton
};
