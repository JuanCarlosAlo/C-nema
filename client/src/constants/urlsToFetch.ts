import { v4 } from 'uuid';
import { ALL_ITEMS_URLS, MOVIES_URLS, SHOWS_URLS } from './urls';

export const HOME_URLS = [
	{ id: v4(), sliderTitle: 'Trending', url: ALL_ITEMS_URLS.ALL_TRENDING },
	{ id: v4(), sliderTitle: 'Trending Tv Shows', url: SHOWS_URLS.TRENDING },
	{ id: v4(), sliderTitle: 'Recently Added Shows', url: SHOWS_URLS.NEW },
	{ id: v4(), sliderTitle: 'Trending Movies', url: MOVIES_URLS.TRENDING },
	{ id: v4(), sliderTitle: 'Recently Added Movies', url: MOVIES_URLS.NEW }
];
export const MOVIES_PAGE_URLS = [
	{ id: v4(), sliderTitle: 'Recently Added Movies', url: MOVIES_URLS.NEW },
	{ id: v4(), sliderTitle: 'Trending Movies', url: MOVIES_URLS.TRENDING }
];
export const SHOWS_PAGE_URLS = [
	{ id: v4(), sliderTitle: 'Recently Added Shows', url: SHOWS_URLS.NEW },
	{ id: v4(), sliderTitle: 'Trending Tv Shows', url: SHOWS_URLS.TRENDING }
];
