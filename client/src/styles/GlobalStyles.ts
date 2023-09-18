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
  width: 10px;
  width: 10px;
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
  background-color: transparent;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb:active {
  background-color:${COLORS.MAIN};
}
`;

export { GlobalStyles };
