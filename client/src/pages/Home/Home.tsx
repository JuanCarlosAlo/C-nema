import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Slider from '../../components/slider/Slider';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { HOME_URLS } from '../../constants/urlsToFetch';

const Home = () => {
	return (
		<PageComponent isBack={true}>
			<Secondaryheader />

			{HOME_URLS.map(item => (
				<Slider url={item.url} title={item.sliderTitle} />
			))}
		</PageComponent>
	);
};

export default Home;
