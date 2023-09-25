import { v4 } from 'uuid';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { MediaItem } from '../../interfaces/mediaItem';
import Text from '../text/Text';
import { StyledTagsContainer } from './styles';

interface MoreInfoModalProps {
	info?: MediaItem;
}

const AditionalInfo = ({ info }: MoreInfoModalProps) => {
	return (
		<>
			<div>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES}
					margin='auto'
					nofullwidth={false}
					text={'Additional Info'}
				/>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={true}
					text={`Director: ${info?.info.director}`}
				/>

				<StyledTagsContainer>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.WHITE}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						margin='0'
						nofullwidth={true}
						text={`Cast:`}
					/>
					{info?.info.cast?.map(people => (
						<Text
							key={v4()}
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='0'
							nofullwidth={true}
							text={people}
						/>
					))}
				</StyledTagsContainer>
				<StyledTagsContainer>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.WHITE}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						margin='0'
						nofullwidth={true}
						text={`Genres:`}
					/>
					{info?.info.genres?.map(genre => (
						<Text
							key={v4()}
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='0'
							nofullwidth={true}
							text={genre}
						/>
					))}
				</StyledTagsContainer>

				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={true}
					text={`Aired in: ${info?.info.dateCreated}`}
				/>
			</div>
		</>
	);
};

export default AditionalInfo;
