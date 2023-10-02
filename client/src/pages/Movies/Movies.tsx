import PageComponent from '../../components/page-component/PageComponent';
import Secondaryheader from '../../components/secondary-header/SecondaryHeader';
import Slider from '../../components/slider/Slider';

import Title from '../../components/title/Title';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';
import { MOVIES_PAGE_URLS } from '../../constants/urlsToFetch';

const Movies = () => {
	return (
		<PageComponent isBack={true}>
			<Secondaryheader />
			<Title
				align={MEASUREMENTS.ALIGN.CENTER}
				color={COLORS.MAIN}
				fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TITLE}
				nofullwidth={false}
				text={'Movies'}
			/>
			{MOVIES_PAGE_URLS.map(item => (
				<Slider url={item.url} title={item.sliderTitle} key={item.id} />
			))}
		</PageComponent>
	);
};

export default Movies;
