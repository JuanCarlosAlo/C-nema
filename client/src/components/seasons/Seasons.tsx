import { useState } from 'react';
import { MediaItem } from '../../interfaces/mediaItem';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import {
	StyledDescriptionContainer,
	StyledEpisodeContainer,
	StyledSeasonContainer,
	StyledSeasonImg,
	StyledSelect,
	StyledTitleSelectContainer
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../context/Modal.context';
import { getMediaSeasonsToPlay } from '../../utils/getMediaSeasonsToPlay';

interface MediaProps {
	media: MediaItem;
}

const Seasons = ({ media }: MediaProps) => {
	const { setContent } = useModalContext();
	const [seasonActive, setSeasonActive] = useState(0);

	const navigate = useNavigate();

	const allMedia = getMediaSeasonsToPlay(media);

	return (
		<StyledSeasonContainer>
			<StyledTitleSelectContainer>
				<div>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES}
						margin='auto'
						nofullwidth={true}
						text={'Episodes'}
					/>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						margin='auto'
						nofullwidth={true}
						text={`Season ${seasonActive}`}
					/>
				</div>
				{media.seasons && media.seasons.length > 1 && (
					<StyledSelect
						onChange={e => setSeasonActive(parseInt(e.target.value, 10))}
					>
						{media.seasons?.map((season, index) => (
							<option key={season._id} value={index}>
								{`Season ${index + 1}`}
							</option>
						))}
					</StyledSelect>
				)}
			</StyledTitleSelectContainer>
			<div>
				{media.seasons &&
					media.seasons[seasonActive].episodes.map((episode, index) => (
						<StyledEpisodeContainer
							key={episode._id}
							onClick={() => {
								setContent(null);
								const episodeIndex =
									media.seasons
										.slice(0, seasonActive)
										.reduce((acc, season) => acc + season.episodes.length, 0) +
									index;
								console.log(episodeIndex);
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
					))}
			</div>
		</StyledSeasonContainer>
	);
};

export default Seasons;
