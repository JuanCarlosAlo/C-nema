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

import { getPlayButtonProps } from '../../utils/getPlayButtonProps';

interface MoreInfoModalProps {
	media: MediaItem;
	setContent: (content: MediaItem | null) => void;
}

const MoreInfoModal = ({ media, setContent }: MoreInfoModalProps) => {
	const playButtonProps = getPlayButtonProps(media);

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
						text={media?.title}
					/>
					<StyledInfoGap>
						<PlayButton media={playButtonProps} index={0} />
						<AddToListButton />
					</StyledInfoGap>
				</StyledTitleContainer>

				<StyledCoverInfo src={media?.cover} alt='cover' />
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
						text={media?.info.dateCreated}
					/>
					{media?.seasons ? (
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='auto'
							nofullwidth={true}
							text={`Seasons ${media?.seasons?.length}`}
						/>
					) : (
						<Text
							align={MEASUREMENTS.ALIGN.LEFT}
							color={COLORS.WHITE}
							fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
							margin='auto'
							nofullwidth={true}
							text={media?.type}
						/>
					)}
				</StyledInfoGap>
				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={false}
					text={`Recommended for ages ${media?.info.maturityRating} and up`}
				/>

				<Text
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.WHITE}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth={false}
					text={media?.info.description}
				/>
				{media?.seasons && <Seasons media={media} />}
				<AditionalInfo info={media} />
			</StyledInfoContainer>
		</StyledMorInfoModal>
	);
};

export default MoreInfoModal;
