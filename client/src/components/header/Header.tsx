import { StyledHeader, StyledHeaderContainer, StyledMenu } from './styles';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import Icon from '../icon/Icon';
const Header = () => {
	const authContext = useContext(AuthContext);
	const { currentUser } = authContext || {};
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES} />
				{currentUser ? (
					<nav>
						<StyledMenu>
							<Link to={'/profile'}>
								<li>
									<Icon img={'/images/gear.svg'} alt='gear icon' />
								</li>
							</Link>
						</StyledMenu>
					</nav>
				) : (
					<nav>
						<StyledMenu>
							<Link to={'/register'}>
								<li>
									<Text
										align={MEASUREMENTS.ALIGN.CENTER}
										color={COLORS.MAIN}
										fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
										nofullwidth={true}
										text={'Register'}
									/>
								</li>
							</Link>
							<Link to={'/login'}>
								<li>
									<Text
										align={MEASUREMENTS.ALIGN.CENTER}
										color={COLORS.MAIN}
										fontSize={MEASUREMENTS.FONTS_SIZE.KEY.TEXT}
										nofullwidth={true}
										text={'Login'}
									/>
								</li>
							</Link>
						</StyledMenu>
					</nav>
				)}
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
