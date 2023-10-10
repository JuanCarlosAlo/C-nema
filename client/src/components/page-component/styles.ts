import styled from 'styled-components';
import { MEASUREMENTS } from '../../constants/measurements';
import { ReactNode } from 'react';

interface StyledPageComponentProps {
	children: ReactNode;
	isBack: boolean;
}

const StyledPage = styled.div<StyledPageComponentProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(
		${MEASUREMENTS.PAGES.HEIGHT} -
			calc(${MEASUREMENTS.HEADER.MAIN.HEIGHT} + ${MEASUREMENTS.FOOTER.HEIGHT})
	);
	padding-top: ${({ isBack }) => {
		if (isBack) {
			return `${MEASUREMENTS.PADDING.SECONDARY_HEADER.DESKTOP};`;
		} else {
			return ` ${MEASUREMENTS.PADDING.SECONDARY_HEADER.MOBILE}`;
		}
	}};
	padding-left: 10px;
	overflow-y: scroll;
	/* max-width: 1080px; */
	margin-left: auto;
	margin-right: auto;

	@media screen and (min-width: 768px) {
		padding-top: ${MEASUREMENTS.PADDING.SECONDARY_HEADER.DESKTOP};
	}
`;

export { StyledPage };
