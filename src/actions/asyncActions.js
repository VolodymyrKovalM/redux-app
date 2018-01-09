export const START_FETCHING = 'START_FETCHING';
export const START_FETCHING_FILMS = 'START_FETCHING_FILMS';
export const RECEIVED_PAGES_DATA = 'RECEIVED_DATA';
export const RECEIVED_FILMS = 'RECEIVED_FILMS';
export const SHOW_PREV_HERO = 'SHOW_PREV_HERO';
export const SHOW_NEXT_HERO = 'SHOW_NEXT_HERO';

export const startFetching = () => ({
	type: START_FETCHING,
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

export const showPrevHero = () => ({
	type: SHOW_PREV_HERO,
});

export const showNextHero = () => ({
	type: SHOW_NEXT_HERO,
});
