import sinon from 'sinon';
import { runSaga } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchHeros, fetchFilms } from '../sagas/workers';
import * as Api from '../api';
import * as ActionTypes from '../actions/ActionTypes';
import { startFetching, receivedPagesData, startFetchingFilms, receivedFilms } from '../actions/StarWarsActions';

describe('testing sagas', () => {
	describe('testing fetchHeros', () => {
		const url = 'https://swapi.co/api/people/';
		const data = {
			count: 87,
			previous: null,
			next: null,
			results: [],
		}

		const gen = fetchHeros(startFetching(url));

		it('should return the Api.fetchHeros call', () => {
			expect(gen.next().value).toEqual(call(Api.fetchHeros, url));
		});

		it('should dispatch a RECEIVED_PAGES_DATA action', () => {
			expect(gen.next(data).value).toEqual(put(receivedPagesData(data)));
		});

		it('should dispatch a START_FETCHING_FILMS action', () => {
			expect(gen.next().value).toEqual(put(startFetchingFilms()));
		});

		it('should be done', () => {
			expect(gen.next().done).toEqual(true);
		});
	});
});
