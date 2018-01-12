
import { all } from 'redux-saga/effects';
import {
	watchFetchFilms,
	watchFetchHeros,
	watchShowPrevHero,
	watchShowNextHero,
} from './watchers';

export default function* starWarsRootSaga() {
	yield all([
		watchFetchHeros(),
		watchFetchFilms(),
		watchShowPrevHero(),
		watchShowNextHero(),
	]);
}
