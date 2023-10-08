import PageComponent from '../../components/page-component/PageComponent';
import { useFetch } from '../../hooks/useFetch';
import { StyledInputContainer, StyledSearchBar } from './styles';
import { ALL_ITEMS_URLS } from '../../constants/urls';
import { MediaItem } from '../../interfaces/mediaItem';
import SliderItem from '../../components/slider-item/SliderItem';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';
import Loading from '../../components/loading/Loading';
import { setFetchInfo } from '../../interfaces/setFetchInfo';

interface ObjectData {
	mediaItem?: MediaItem;
}

interface ApiResponse {
	data: ObjectData[];
}

const Search = () => {
	const { loading, data, setFetchInfo } = useFetch<ApiResponse>({
		url: ALL_ITEMS_URLS.ALL_SEARCH
	});
	if (loading) return <Loading />;
	return (
		<PageComponent isBack={true}>
			<StyledInputContainer>
				<StyledSearchBar
					onChange={e => handleChange({ e, setFetchInfo })}
					type='text'
					name='search'
					placeholder='Search Movies and Tv Shows'
				/>
			</StyledInputContainer>
			<PageColumnsContainer>
				{data instanceof Array &&
					data.map(item => (
						<SliderItem key={item._id} mediaItem={item} margin={'auto'} />
					))}
			</PageColumnsContainer>
		</PageComponent>
	);
};

interface handleChangeProps {
	e: React.BaseSyntheticEvent;
	setFetchInfo: (value: setFetchInfo) => void;
}
const handleChange = async ({ e, setFetchInfo }: handleChangeProps) => {
	const keyword = e.target.value;
	if (keyword.length < 3) return;
	await setFetchInfo({
		url: ALL_ITEMS_URLS.ALL_SEARCH + keyword
	});
};

export default Search;
