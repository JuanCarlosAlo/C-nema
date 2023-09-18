import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useModalContext } from '../context/Modal.context';
import Modal from '../components/modal/Modal';

const Layout = () => {
	const { content } = useModalContext();

	return (
		<>
			{content && <Modal>{content}</Modal>}
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
