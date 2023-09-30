import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { SHOWS_URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import { MediaItem } from '../../interfaces/mediaItem';
import SliderItem from '../slider-item/SliderItem';
import Title from '../title/Title';
import { SliderContainer, StyledSlider } from './styles';

interface ObjectData {
	mediaItem?: MediaItem;
}

interface ApiResponse {
	data: ObjectData[];
}
interface SliderProps {
	url: string;
	title: string;
}

const Slider = ({ url, title }: SliderProps) => {
	const { loading, error, data } = useFetch<ApiResponse>({ url });
	if (loading) return <p>Loading</p>;
	if (error) return <p>error</p>;
	if (!data) {
		return <p>error</p>;
	} else {
		console.log(data);
		return (
			<SliderContainer>
				<Title
					align={MEASUREMENTS.ALIGN.LEFT}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
					nofullwidth={true}
					text={title}
				/>

				<StyledSlider>
					{data instanceof Array &&
						data.map(item => (
							<SliderItem key={item._id} mediaItem={item} margin={0} />
						))}
				</StyledSlider>
			</SliderContainer>
		);
	}
};

export default Slider;
