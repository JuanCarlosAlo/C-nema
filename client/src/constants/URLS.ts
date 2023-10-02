const BASE = 'http://localhost:3000/';

export const ALL_ITEMS_URLS = {
	ALL_ITEMS: BASE + 'all/all-items',
	ALL_TRENDING: BASE + 'all/trending'
};
export const SHOWS_URLS = {
	ALL_SHOWS: BASE + 'shows/all-shows',
	ADD_VIEW: BASE + 'shows/add-view'
};
export const MOVIES_URLS = {
	ALL_MOVIES: BASE + 'movies/all-movies',
	ADD_VIEW: BASE + 'movies/add-view'
};

export const USERS_URLS = {
	ALL: BASE + 'users/all-users',
	GET_USER_BY_ID: BASE + 'users/userById/',
	GET_LIST: BASE + 'users/get-list/',
	GET_LIST_ITEMS: BASE + 'users/get-all-list-items/',
	CREATE_USER: BASE + 'users/create-user',
	ADD_TO_LIST: BASE + 'users/add-to-list/'
};
