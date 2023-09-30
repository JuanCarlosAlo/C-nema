import styled from 'styled-components';

const StyledPageColumnsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(auto-fill, 320px);
	gap: 1rem;
	height: 100%;
	width: 100%;
	padding-bottom: 2rem;
	/* padding-left: 10px; */
	overflow-y: scroll;
	@media screen and (min-width: 468px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: 798px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export { StyledPageColumnsContainer };
