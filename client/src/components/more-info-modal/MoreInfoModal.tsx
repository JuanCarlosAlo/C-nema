import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { MediaItem } from '../../interfaces/mediaItem';
import Icon from '../icon/Icon';
import Title from '../title/Title';
import {
	StyledCoverContainer,
	StyledCoverInfo,
	StyledCrossContainer,
	StyledInfoContainer,
	StyledInfoGap,
	StyledMorInfoModal,
	StyledTitleContainer
} from './styles';
import Text from '../text/Text';
import AditionalInfo from '../aditional-info/AditionalInfo';
import Seasons from '../seasons/Seasons';
import PlayButton from '../play-button/PlayButton';
import AddToListButton from '../add-to-list-button/AddToListButton';

interface MoreInfoModalProps {
	mediaItem: MediaItem;
	setContent: (content: MediaItem | null) => void;
}

const MoreInfoModal = ({ mediaItem, setContent }: MoreInfoModalProps) => {
	return (
		<StyledMorInfoModal>
			<StyledCoverContainer>
				<StyledCrossContainer>
					<Icon
						alt='croos icon'
						img='/images/cross.svg'
						setValue={setContent}
						value={null}
					/>
				</StyledCrossContainer>
				<StyledTitleContainer>
					<Title
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.WHITE}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
						margin='auto'
						nofullwidth={false}
						text={mediaItem?.title}
					/>
					<StyledInfoGap>
						<PlayButton mediaItem={mediaItem} index={0} setValue={setContent} />
						<AddToListButton id={mediaItem._id} />
					</StyledInfoGap>
				</StyledTitleContainer>

				<StyledCoverInfo src={mediaItem?.cover} alt='cover' />
			</StyledCoverContainer>
			{/* descriptionContainer */}
			<StyledInfoContainer>
				<StyledInfoGap>
					<Text
						align={MEASUREMENTS.ALIGN.LEFT}
						color={COLORS.WHITE}
						fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
						margin='auto'
						nofullwidth={true}
						text={mediaItem?.info.dateCreated}
					/>
					{mediaItem?.seasons ? (
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='auto'
							nofullwidth={true}
							text={`Seasons ${mediaItem?.seasons?.length}`}
						/>
					) : (
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='auto'
							nofullwidth={true}
							text={mediaItem?.type}
						/>
					)}
				</StyledInfoGap>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={false}
					text={`Recommended for ages ${mediaItem?.info.maturityRating} and up`}
				/>

				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={false}
					text={mediaItem?.info.description}
				/>
				{mediaItem?.seasons && <Seasons media={mediaItem} />}
				<AditionalInfo info={mediaItem} />
			</StyledInfoContainer>
		</StyledMorInfoModal>
	);
};

export default MoreInfoModal;
