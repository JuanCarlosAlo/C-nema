import { useContext } from 'react';
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
import Loading from '../../components/loading/Loading';
import Text from '../../components/text/Text';

const ListPage = () => {
	const authContext = useContext(AuthContext);
	const { currentUser, loadingFirebase } = authContext || {};

	const { data, loading } = useFetch<MediaItem[]>({
		url: USERS_URLS.GET_LIST_ITEMS + currentUser?.uid
	});

	if (loadingFirebase || loading) return <Loading />;
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
			{data.length > 0 ? (
				<PageColumnsContainer>
					{data.map(item => (
						<SliderItem key={item._id} mediaItem={item} margin={'auto'} />
					))}
				</PageColumnsContainer>
			) : (
				<Text
					align={MEASUREMENTS.ALIGN.CENTER}
					color={COLORS.MAIN}
					fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
					margin='auto'
					nofullwidth
					text={'Your list is empty'}
				/>
			)}
		</PageComponent>
	);
};

export default ListPage;
