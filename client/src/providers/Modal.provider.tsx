import { ReactNode, useState } from 'react';
import { ModalContext } from '../context/Modal.context';

interface ModalProviderProps {
	children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
	const [content, setContent] = useState(null);

	return (
		<ModalContext.Provider value={{ content, setContent }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
