import { StyledHeader, StyledHeaderContainer, StyledMenu } from './styles';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import Text from '../text/Text';
import { MEASUREMENTS } from '../../constants/measurements';
import { COLORS } from '../../constants/colors';
const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<Logo fontSize={MEASUREMENTS.FONTS_SIZE.KEY.SUBTITLES} />
				{/* {currentUser ? (
					<nav>
						<StyledMenu>
							<li>
								<CartButton />
							</li>
							<Link to={`/orders/${currentUser._id}`}>
								<li>
									<Icon img={'/images/orders.png'} />
								</li>
							</Link>
							<Link to={'/profile'}>
								<li>
									<Icon img={'/images/gear.svg'} />
								</li>
							</Link>
						</StyledMenu>
					</nav>
				) : ( */}
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
				{/* )} */}
			</StyledHeaderContainer>
		</StyledHeader>
	);
};

export default Header;
