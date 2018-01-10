/* eslint-disable import/no-extraneous-dependencies */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as swActions from '../actions/StarWarsActions';
import * as swTypes from '../actions/ActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// test creating actions
it('should create actions', () => {
	const expStartFetching = {
		type: swTypes.START_FETCHING,
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

	expect(swActions.startFetching()).toEqual(expStartFetching);
	expect(swActions.startFetchingFilms()).toEqual(expStartFetchingFilms);
	expect(swActions.receivedPagesData(pagesData, false)).toEqual(expReceivedPagesData);
	expect(swActions.receivedFilms(filmsData)).toEqual(expReceivedFilms);
});

it('should dispatch an action', () => {
	const initialState = {};
	const store = mockStore(initialState);

	store.dispatch(swActions.startFetching());
	store.dispatch(swActions.startFetchingFilms());

	const actions = store.getActions();
	const expectedPayload = [
		{ type: swTypes.START_FETCHING },
		{ type: swTypes.START_FETCHING_FILMS },
	];
	expect(actions).toEqual(expectedPayload);
});

describe('test async actions', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	});

	it('creates RECEIVED_PAGES_DATA action when fetching pages data has been done', () => {
		const data = {
			count: 87,
			pages: [],
			prev: null,
			next: null,
		};
		const filmsData = [
			{
				title: 'The Phantom Menace',
				episode_id: 5,
			},
		];

		fetchMock
			.getOnce(
				'https://swapi.co/api/people/',
				{
					body: data,
					headers: { 'content-type': 'application/json' },
				},
			);

		fetchMock
			.getOnce(
				'https://swapi.co/api/films/4/',
				{
					body: filmsData,
					headers: { 'content-type': 'application/json' },
				},
			);

		const expectedActions = [
			{ type: swTypes.START_FETCHING },
			{
				type: swTypes.RECEIVED_PAGES_DATA,
				payload: data,
				changePage: false,
			},
			{ type: swTypes.START_FETCHING_FILMS },
		];

		const st = {
			swData: {
				currentIndex: 0,
				herosInCurrentPage: [
					{
						films: [
							'https://swapi.co/api/films/4/',
						],
					},
				],
			},
		};
		const store = mockStore(st);
		return store.dispatch(swActions.fetchHeros('https://swapi.co/api/people/')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
