import { Link } from 'react-router-dom';
import { StyledFooter } from './styles';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';

const Footer = () => {
	return (
	  <StyledFooter>
		<Text
		  text={'Developed by J.C.A.M'}
		  color={COLORS.MAIN}
		  fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES}
		  align={MEASUREMENTS.ALIGN.LEFT}
		  margin={'0'}
		  nofullwidth={false}
		/>
		<Link target='_blank' to='https://github.com/JuanCarlosAlo/VPA-COMPI'>
		  <Icon img={'/images/github.svg'} />
		</Link>
	  </StyledFooter>
	);
  };
  
  export default Footer;
  
