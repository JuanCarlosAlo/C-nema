import styled from 'styled-components';

import { COLORS } from '../../constants/colors';
import { MEASUREMENTS } from '../../constants/measurements';


const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	width: 100%;
	max-width: 350px;

`;

const StyledInput = styled.input`
width: 100%;
`
const StyledLabel = styled.label`
color: ${COLORS.MAIN};
font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.MOBILE};
@media screen and (min-width: 468px){
  font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET};
  
}
@media screen and (min-width: 768px){
  font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.TABLET};
  
}
@media screen and (min-width: 1024px){
  font-size: ${MEASUREMENTS.FONTS_SIZE.SUBTITLES.DESKTOP};
  
}
`

const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  &:focus

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
	&:hover{
		box-shadow: 0 0 10px 100px ${COLORS.MAIN} inset;
		color: ${COLORS.WHITE};
	}
  }
`;
export { StyledInputContainer, StyledSelect, StyledInput, StyledLabel };
