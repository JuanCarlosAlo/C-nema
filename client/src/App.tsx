import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import Component from './components/component';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Component name={'JC'} age={26}/>
		</>
	);
};

export default App;
