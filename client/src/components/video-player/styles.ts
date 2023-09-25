import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';

const StyledVideoPlayerContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
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
	background-color: ${COLORS.MAIN};
`;

export {
	VideoContainer,
	StyledVideo,
	StyledVideoPlayerContainer,
	StyledEpisodeButton
};
