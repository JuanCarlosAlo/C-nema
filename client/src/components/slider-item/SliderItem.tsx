import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { MediaItem } from '../../interfaces/mediaItem';
import AddToListButton from '../add-to-list-button/AddToListButton';
import MoreInfoButton from '../more-info-button/MoreInfoButton';
import Text from '../text/Text';
import {
	StyledImgItem,
	StyledInfoContainer,
	StyledInfoHover,
	StyledSliderItem
} from './styles';
import { v4 } from 'uuid';

interface SliderItemProps {
	mediaItem?: MediaItem;
}

const SliderItem = ({ mediaItem }: SliderItemProps) => {
	if (!mediaItem) return <p>Loading</p>;

	return (
		<StyledSliderItem>
			<StyledImgItem src={mediaItem.cover} alt='cover' />
			<StyledInfoContainer>
				<StyledInfoHover>
					<Text
						align={MEASUREMENTS.ALIGN.CENTER}
						color={COLORS.MAIN}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SMALL_TEXT}
						margin={'auto'}
						nofullwidth={true}
						text={`Play`}
					/>
					<AddToListButton />
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
						text={`${mediaItem.seasons?.length} Seasons`}
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
