
import { all } from 'redux-saga/effects';
import {
	watchFetchFilms,
	watchFetchHeros,
	watchShowPrevHero,
	watchShowNextHero
} from './watchers';

export default function* rootSaga() {
	yield all([
		watchFetchHeros(),
		watchFetchFilms(),
		watchShowPrevHero(),
		watchShowNextHero()
	]);
}
