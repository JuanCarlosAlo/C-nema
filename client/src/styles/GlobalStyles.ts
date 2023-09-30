import { createGlobalStyle } from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
    background: ${SECONDARY_COLORS.BACKGROUND_GRADIANT};;
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    overflow-x: hidden;
  
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  /* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: transparent;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 5px;
  width: 5px;
}
*::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: transparent;
  
}

*::-webkit-scrollbar-track:hover {
  background-color: transparent;
  
}

*::-webkit-scrollbar-track:active {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: ${COLORS.MAIN};
}

*::-webkit-scrollbar-thumb:hover {
  background-color: ${COLORS.MAIN};

}

*::-webkit-scrollbar-thumb:active {
  background-color:${COLORS.MAIN};
}
.video-js .vjs-big-play-button {
 background-color: ${COLORS.MAIN};
 top: 50%;
 left: 50%;
 transform: translateX(-50%);
 height: 50px;
 width: 100px;
	color: white;
	padding: 10px 20px;
	font-size: 16px;
	border: none;
	cursor: pointer;
	/* ... otros estilos personalizados ... */

	&:hover {
		/* Estilos al pasar el cursor sobre el botón */
		background-color: ${COLORS.MAIN_HOVER};
	}
}
.vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {
    position: absolute;
    top: 40%;
    left: 0;
    transform: scale(1.5);
    width: 100%;
    height: 100%;
}.video-js .vjs-big-play-button {
  background-color: ${COLORS.MAIN};
}
`;

export { GlobalStyles };
