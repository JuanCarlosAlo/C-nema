import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Slider from '../../components/slider/Slider';
import { HOME_URLS } from '../../constants/urlsToFetch';

const Home = () => {
	return (
		<PageComponent isBack={true}>
			<Secondaryheader />

			{HOME_URLS.map(item => (
				<Slider url={item.url} title={item.sliderTitle} key={item.id} />
			))}
		</PageComponent>
	);
};

export default Home;
