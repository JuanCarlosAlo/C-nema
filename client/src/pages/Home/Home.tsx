import PageComponent from '../../components/page-component/PageComponent';
import Slider from '../../components/slider/Slider';
import Text from '../../components/text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const Home = () => {
	return (
		<PageComponent isBack={true}>
			<Text
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
				margin={'auto'}
				nofullwidth={false}
				text='HOME'
			/>
			<Slider />
		</PageComponent>
	);
};

export default Home;
