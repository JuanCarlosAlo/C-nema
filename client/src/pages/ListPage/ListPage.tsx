import { useContext, useEffect } from 'react';
import PageComponent from '../../components/page-component/PageComponent';
import { useFetch } from '../../hooks/useFetch';
import { Navigate } from 'react-router-dom';
import { USERS_URLS } from '../../constants/urls';
import { AuthContext } from '../../context/Auth.context';
import { MediaItem } from '../../interfaces/mediaItem';
import SliderItem from '../../components/slider-item/SliderItem';
import Title from '../../components/title/Title';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import PageColumnsContainer from '../../components/page-columns-container/PageColumnsContainer';

const ListPage = () => {
	const authContext = useContext(AuthContext);
	const { currentUser, loadingFirebase } = authContext || {};

	const { data, loading, setFetchInfo } = useFetch<MediaItem[]>({
		url: USERS_URLS.GET_LIST_ITEMS + currentUser?.uid
	});

	useEffect(() => {
		if (currentUser) {
			setFetchInfo({
				url: USERS_URLS.GET_LIST_ITEMS + currentUser.uid
			});
		}
	}, [currentUser, setFetchInfo]);

	if (loadingFirebase || loading) return <p>Loading</p>;
	if (!currentUser) return <Navigate to={'/register'} />;

	if (!data) return <p>error</p>;
	console.log(data);
	return (
		<PageComponent isBack={false}>
			<Secondaryheader />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				nofullwidth={false}
				text={'My list'}
			/>
			<PageColumnsContainer>
				{data.length > 0 ? (
					data.map(item => (
						<SliderItem key={item._id} mediaItem={item} margin={'auto'} />
					))
				) : (
					<p>The list is empty</p>
				)}
			</PageColumnsContainer>
		</PageComponent>
	);
};

export default ListPage;
