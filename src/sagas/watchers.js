import { takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../actions/ActionTypes';
import {
	fetchHeros,
	fetchFilms,
	showPrevHeroWorker,
	showNextHeroWorker
} from './workers';

export function* watchFetchFilms() {
	yield takeLatest(ActionTypes.START_FETCHING_FILMS, fetchFilms);
}

export function* watchFetchHeros() {
	yield takeLatest(ActionTypes.START_FETCHING, fetchHeros);
}

export function* watchShowPrevHero() {
	yield takeLatest(ActionTypes.SHOW_PREV_HERO, showPrevHeroWorker);
}

export function* watchShowNextHero() {
	yield takeLatest(ActionTypes.SHOW_NEXT_HERO, showNextHeroWorker);
}
