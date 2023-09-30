import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { MediaItem } from '../../interfaces/mediaItem';
import { getMediaProps } from '../../utils/getMediaProps';
import AddToListButton from '../add-to-list-button/AddToListButton';
import MoreInfoButton from '../more-info-button/MoreInfoButton';
import PlayButton from '../play-button/PlayButton';
import Text from '../text/Text';
import {
	StyledImgItem,
	StyledInfoContainer,
	StyledInfoHover,
	StyledSliderItem,
	StyledTitleContainer
} from './styles';
import { v4 } from 'uuid';

interface SliderItemProps {
	mediaItem?: MediaItem;
	margin: number | string;
}

const SliderItem = ({ mediaItem, margin }: SliderItemProps) => {
	if (!mediaItem) return <p>Loading</p>;
	const media = getMediaProps(mediaItem);

	return (
		<StyledSliderItem margin={margin}>
			<StyledTitleContainer>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin={'auto'}
					nofullwidth={false}
					text={mediaItem.title}
				/>
			</StyledTitleContainer>
			<StyledImgItem src={mediaItem.cover} alt='cover' />
			<StyledInfoContainer>
				<StyledInfoHover>
					<PlayButton media={media} index={0} />
					<AddToListButton id={mediaItem._id} />
					<MoreInfoButton mediaItem={mediaItem} />
				</StyledInfoHover>
				<StyledInfoHover>
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						margin={'auto'}
						nofullwidth={true}
						text={`+${mediaItem.info?.maturityRating}`}
					/>
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						margin={'auto'}
						nofullwidth={true}
						text={
							mediaItem.type === 'show'
								? `${mediaItem.seasons?.length} Seasons`
								: mediaItem.type
						}
					/>
				</StyledInfoHover>
				<StyledInfoHover>
					{mediaItem.info.genres.slice(0, 3).map(tag => (
						<Text
							key={v4()}
							align={MEASUREMENTS.ALIGN.CENTER}
							color={COLORS.MAIN}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
							margin={'auto'}
							nofullwidth={true}
							text={tag}
						/>
					))}
				</StyledInfoHover>
			</StyledInfoContainer>
		</StyledSliderItem>
	);
};

export default SliderItem;
