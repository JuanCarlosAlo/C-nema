import { MEASUREMENTS } from '../../constants/measurements';
import { StyledLogo } from './styles';

interface LogoProps {
	fontSize:  keyof typeof MEASUREMENTS.FONTS_SIZE;
}

const Logo = ({ fontSize }: LogoProps) => {
	return (
		<StyledLogo fontSize={fontSize} to={'/'}>
			C-NEMA
		</StyledLogo>
	);
};

export default Logo;
