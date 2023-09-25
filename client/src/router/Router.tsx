import { Route, Routes } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import VideoPage from '../pages/VideoPage/VideoPage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/video/:id' element={<VideoPage />} />
			</Route>
		</Routes>
	);
};

export default Router;
