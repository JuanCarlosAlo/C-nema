import { MediaItem } from '../../interfaces/mediaItem';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import {
	StyledSeasonContainer,
	StyledSelect,
	StyledTitleSelectContainer
} from './styles';
import { getMediaSeasonsToPlay } from '../../utils/getMediaSeasonsToPlay';
import EpisodeContainer from '../episode-container/EpisodeContainer';
import { useState } from 'react';

interface MediaProps {
	media: MediaItem;
}

const Seasons = ({ media }: MediaProps) => {
	const [seasonActive, setSeasonActive] = useState(0);

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
						<EpisodeContainer
							episode={episode}
							index={index}
							media={media}
							seasonActive={seasonActive}
							key={episode._id}
						/>
					))}
			</div>
		</StyledSeasonContainer>
	);
};

export default Seasons;
