import {
	START_FETCHING,
	START_FETCHING_FILMS,
	RECEIVED_PAGES_DATA,
	RECEIVED_FILMS,
	SHOW_PREV_HERO_IN_CURRENT_PAGE,
	SHOW_NEXT_HERO_IN_CURRENT_PAGE,
	SHOW_PREV_HERO,
	SHOW_NEXT_HERO,
} from './ActionTypes';

export const startFetching = (url, changePage = false) => ({
	type: START_FETCHING,
	url,
	changePage,
});

export const startFetchingFilms = () => ({
	type: START_FETCHING_FILMS,
});

export const receivedPagesData = (data, changePage = false) => ({
	type: RECEIVED_PAGES_DATA,
	payload: data,
	changePage,
});

export const receivedFilms = data => ({
	type: RECEIVED_FILMS,
	payload: data,
});

export const showPrevHeroInCurrentPage = () => ({
	type: SHOW_PREV_HERO_IN_CURRENT_PAGE,
});

export const showNextHeroInCurrentPage = () => ({
	type: SHOW_NEXT_HERO_IN_CURRENT_PAGE,
});

export const showPrevHero = () => ({
	type: SHOW_PREV_HERO,
});

export const showNextHero = () => ({
	type: SHOW_NEXT_HERO,
});
