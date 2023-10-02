import { Route, Routes } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import VideoPage from '../pages/VideoPage/VideoPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';
import ListPage from '../pages/ListPage/ListPage';
import Movies from '../pages/Movies/Movies';
import Shows from '../pages/Shows/Shows';
import Search from '../pages/Search/Search';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/video/:id' element={<VideoPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/my-list' element={<ListPage />} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/shows' element={<Shows />} />
				<Route path='/search' element={<Search />} />
			</Route>
		</Routes>
	);
};

export default Router;
