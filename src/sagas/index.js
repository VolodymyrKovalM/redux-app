import { all } from 'redux-saga/effects';
import starWarsRootSaga from './StarWarsSagas';

export default function* rootSaga() {
	yield all([
		starWarsRootSaga(),
	]);
}
