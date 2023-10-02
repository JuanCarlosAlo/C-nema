import { v4 } from 'uuid';
import { ALL_ITEMS_URLS, MOVIES_URLS, SHOWS_URLS } from './urls';

export const HOME_URLS = [
	{ id: v4(), sliderTitle: 'Trending', url: ALL_ITEMS_URLS.ALL_TRENDING },
	{ id: v4(), sliderTitle: 'TV Shows', url: SHOWS_URLS.ALL_SHOWS },
	{ id: v4(), sliderTitle: 'Movies', url: MOVIES_URLS.ALL_MOVIES }
];
export const MOVIES_PAGE_URLS = [
	{ id: v4(), sliderTitle: 'Movies', url: MOVIES_URLS.ALL_MOVIES }
];
export const SHOWS_PAGE_URLS = [
	{ id: v4(), sliderTitle: 'Movies', url: SHOWS_URLS.ALL_SHOWS }
];
