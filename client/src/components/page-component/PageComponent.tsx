import { StyledPage } from './styles';
import { ReactNode } from 'react';

interface PageComponentProps {
	children: ReactNode;
	isBack: boolean;
}

const PageComponent = ({ children, isBack }: PageComponentProps) => {
	return <StyledPage isBack={isBack}>{children}</StyledPage>;
};

export default PageComponent;
