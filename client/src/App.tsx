import { GlobalStyles } from './styles/GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.js';
import ModalProvider from './providers/Modal.provider.js';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<ModalProvider>
				<Router />
			</ModalProvider>
		</BrowserRouter>
	);
};

export default App;
