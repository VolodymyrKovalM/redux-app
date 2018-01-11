import {
	START_FETCHING,
	START_FETCHING_FILMS,
	RECEIVED_PAGES_DATA,
	RECEIVED_FILMS,
	SHOW_PREV_HERO_IN_CURRENT_PAGE,
	SHOW_NEXT_HERO_IN_CURRENT_PAGE,
} from './ActionTypes';

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

export const showPrevHeroInCurrentPage = () => ({
	type: SHOW_PREV_HERO_IN_CURRENT_PAGE,
});

export const showNextHeroInCurrentPage = () => ({
	type: SHOW_NEXT_HERO_IN_CURRENT_PAGE,
});

export const fetchFilms = () => (dispatch, getState) => {
	dispatch(startFetchingFilms());

	const { swData } = getState();
	const filmsUrls = swData.herosInCurrentPage[swData.currentIndex].films;
	const promises = filmsUrls.map(url => fetch(url));

	return Promise.all(promises)
		.then(responses => Promise.all(responses.map(response => response.json())))
		.then(data => {
			dispatch(receivedFilms(data));
		});
};

export const fetchHeros = (url, pageNeedsToBeChanged = false) => dispatch => {
	dispatch(startFetching());
	return fetch(url)
		.then(res => res.json())
		.then(data => {
			dispatch(receivedPagesData(data, pageNeedsToBeChanged));

			dispatch(fetchFilms());
		});
};

export const fetchNextPage = () => (dispatch, getState) => {
	const { swData } = getState();

	if (swData.currentIndex === swData.herosInCurrentPage.length - 1) {
		dispatch(fetchHeros(swData.pagesData.next, 'NEXT'));
	} else {
		dispatch(showNextHeroInCurrentPage());
	}

	dispatch(fetchFilms());
};

export const fetchPrevPage = () => (dispatch, getState) => {
	const { swData } = getState();

	if (swData.currentIndex === 0 && swData.pagesData.previous) {
		dispatch(fetchHeros(swData.pagesData.previous, 'PREV'));
	} else {
		dispatch(showPrevHeroInCurrentPage());
	}

	dispatch(fetchFilms());
};
