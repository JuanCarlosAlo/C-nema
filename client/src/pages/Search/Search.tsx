import PageComponent from '../../components/page-component/PageComponent';
import { useFetch } from '../../hooks/useFetch';
import { StyledInputContainer, StyledSearchBar } from './styles';

const Search = () => {
	const { data, setFetchInfo } = useFetch({ url: '' });
	return (
		<PageComponent isBack={true}>
			<StyledInputContainer>
				<StyledSearchBar
					// onChange={e => handleChange(e, setFetchInfo)}
					type='text'
					name='search'
					placeholder='Search Movies, Tv Shows, Genres'
				/>
			</StyledInputContainer>
		</PageComponent>
	);
};
// const handleChange = async (e, setFetchInfo) => {
// 	const keyWord = e.target.value;
// 	if (keyWord.length < 3) return;
// 	await setFetchInfo({
// 		url: SONGS_URLS.SEARCH + keyWord
// 	});
// };

export default Search;
