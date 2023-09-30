import { GlobalStyles } from './styles/GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.js';
import ModalProvider from './providers/Modal.provider.js';
import AuthProvider from './providers/Auth.provider.js';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<ModalProvider>
					<Router />
				</ModalProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
