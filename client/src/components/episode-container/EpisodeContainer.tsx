import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

import Text from '../text/Text';
import {
	StyledDescriptionContainer,
	StyledEpisodeContainer,
	StyledSeasonImg
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../context/Modal.context';
import { getMediaSeasonsToPlay } from '../../utils/getMediaSeasonsToPlay';
import { Episode, MediaItem } from '../../interfaces/mediaItem';
import { getEpisodeIndex } from '../../utils/getEpisodeIndex';

interface EpisodeContainerProps {
	index: number;
	media: MediaItem;
	episode: Episode;
	seasonActive: number;
}

const EpisodeContainer = ({
	episode,
	index,
	media,
	seasonActive
}: EpisodeContainerProps) => {
	const { setContent } = useModalContext();

	const allMedia = getMediaSeasonsToPlay(media);
	const episodeIndex = getEpisodeIndex(media, seasonActive, index);
	const navigate = useNavigate();

	return (
		<StyledEpisodeContainer
			key={episode._id}
			onClick={() => {
				setContent(null);
				navigate('/video/' + episode._id, {
					state: {
						media: allMedia,
						index: episodeIndex
					}
				});
			}}
		>
			<StyledSeasonImg src={episode.episodeCover} alt='' />
			<div>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES}
					margin='auto'
					nofullwidth={true}
					text={episode.episodeTitle}
				/>
				<StyledDescriptionContainer>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						margin='auto'
						nofullwidth={true}
						text={episode.description}
					/>
				</StyledDescriptionContainer>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES}
					margin='auto'
					nofullwidth={true}
					text={`SE ${episode.season} EP ${index + 1}`}
				/>
			</div>
		</StyledEpisodeContainer>
	);
};

export default EpisodeContainer;
