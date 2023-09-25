import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../constants/colors';

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%) translateX(-50%);
	opacity: 0;
  }
  20% {
	opacity: 1;
    transform: translateY(0)  translateX(-50%);
  }
  60% {
	opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  80% {
	opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
  100% {
	opacity: 0;
    transform: translateY(-100%) translateX(-50%);
  }
`;

const StyledModal = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: ${COLORS.BLACK_TRANSPARENT};
	z-index: 100;
	/* animation: ${fadeIn} 4.5s ease-in-out 1 forwards; */
`;

const StyledModalContainer = styled.div`
	background-color: ${COLORS.BLACK};
	border: 2px solid ${COLORS.MAIN};
	/* border-radius: 1rem; */
	padding-bottom: 1rem;
`;
export { StyledModal, StyledModalContainer };
