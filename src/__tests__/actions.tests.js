/* eslint-disable import/no-extraneous-dependencies */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as swActions from '../actions/StarWarsActions';
import * as swTypes from '../actions/ActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should create actions', () => {
	const url = 'https://swapi.co/api/people/';
	const expStartFetching = {
		type: swTypes.START_FETCHING,
		url: url,
		changePage: false,
	};
	const expStartFetchingFilms = {
		type: swTypes.START_FETCHING_FILMS,
	};
	const pagesData = { swData: null };
	const expReceivedPagesData = {
		type: swTypes.RECEIVED_PAGES_DATA,
		payload: pagesData,
		changePage: false,
	};
	const filmsData = [];
	const expReceivedFilms = {
		type: swTypes.RECEIVED_FILMS,
		payload: filmsData,
	};

	expect(swActions.startFetching(url)).toEqual(expStartFetching);
	expect(swActions.startFetchingFilms()).toEqual(expStartFetchingFilms);
	expect(swActions.receivedPagesData(pagesData, false)).toEqual(expReceivedPagesData);
	expect(swActions.receivedFilms(filmsData)).toEqual(expReceivedFilms);
});

it('should dispatch an action', () => {
	const initialState = {};
	const url = 'https://swapi.co/api/people/';
	const store = mockStore(initialState);

	store.dispatch(swActions.startFetching('https://swapi.co/api/people/'));
	store.dispatch(swActions.startFetchingFilms());

	const actions = store.getActions();
	const expectedPayload = [
		{ type: swTypes.START_FETCHING, url: url, changePage: false },
		{ type: swTypes.START_FETCHING_FILMS },
	];
	expect(actions).toEqual(expectedPayload);
});
