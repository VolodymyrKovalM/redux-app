import { call, put, select } from 'redux-saga/effects';
import {
	startFetching,
	startFetchingFilms,
	receivedPagesData,
	receivedFilms,
	showPrevHeroInCurrentPage,
	showNextHeroInCurrentPage,
} from '../../actions/StarWarsActions';
import * as Api from '../../api';

/* eslint-disable no-console */
export function* fetchHeros(action) {
	try {
		const response = yield call(Api.fetchHeros, action.url);
		if (action.changePage === 'PREV') {
			yield put(receivedPagesData(response, 'PREV'));
		} else if (action.changePage === 'NEXT') {
			yield put(receivedPagesData(response, 'NEXT'));
		} else {
			yield put(receivedPagesData(response));
		}
		yield put(startFetchingFilms());
	} catch (error) {
		console.log(error);
	}
}

export function* fetchFilms() {
	const swData = yield select(state => state.swData);
	const filmsUrls = swData.herosInCurrentPage[swData.currentIndex].films;

	try {
		const response = yield call(Api.fetchFilms, filmsUrls);
		yield put(receivedFilms(response));
	} catch (error) {
		console.log(error);
	}
}

export function* showPrevHeroWorker() {
	const swData = yield select(state => state.swData);

	if (swData.currentIndex === 0 && swData.pagesData.previous) {
		yield put(startFetching(swData.pagesData.previous, 'PREV'));
	} else {
		yield put(showPrevHeroInCurrentPage());
	}

	yield put(startFetchingFilms());
}

export function* showNextHeroWorker() {
	const swData = yield select(state => state.swData);

	if (swData.currentIndex === swData.herosInCurrentPage.length - 1) {
		yield put(startFetching(swData.pagesData.next, 'NEXT'));
	} else {
		yield put(showNextHeroInCurrentPage());
	}

	yield put(startFetchingFilms());
}
