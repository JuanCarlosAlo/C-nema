import { SHOWS_URLS } from '../../constants/URLS';
import { useFetch } from '../../hooks/useFetch';
import { MediaItem } from '../../interfaces/mediaItem';
import SliderItem from '../slider-item/SliderItem';
import { StyledSlider } from './styles';

interface ObjectData {
	mediaItem?: MediaItem;
}

interface ApiResponse {
	data: ObjectData[];
}

const Slider = () => {
	const { loading, error, data } = useFetch<ApiResponse>({
		url: SHOWS_URLS.ALL_SHOWS
	});
	if (loading) return <p>Loading</p>;
	if (error) return <p>error</p>;
	if (!data) {
		return <p>error</p>;
	} else {
		return (
			<StyledSlider>
				{data instanceof Array &&
					data.map(item => <SliderItem key={item._id} mediaItem={item} />)}
			</StyledSlider>
		);
	}
};

export default Slider;
