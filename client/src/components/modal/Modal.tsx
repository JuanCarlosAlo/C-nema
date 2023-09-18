import { createPortal } from 'react-dom';
import { StyledModal, StyledModalContainer } from './styles';
import { ReactNode } from 'react';

interface ModalProps {
	children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
	if (!children) {
		return null;
	}

	return createPortal(
		<StyledModal>
			<StyledModalContainer>{children}</StyledModalContainer>
		</StyledModal>,
		document.getElementById('modal') || document.body
	);
};
export default Modal;
