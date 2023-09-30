import { v4 } from 'uuid';

export const HEADER_BUTTONS = {
	MAIN: [
		{
			_id: v4(),
			URL: '/',
			TEXT: 'Home'
		},
		{
			_id: v4(),
			URL: '/movies',
			TEXT: 'Movies'
		},
		{
			_id: v4(),
			URL: '/shows',
			TEXT: 'Shows'
		},
		{
			_id: v4(),
			URL: '/my-list',
			TEXT: 'My List'
		}
	]
};
