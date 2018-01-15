import { all } from 'redux-saga/effects';
import starWarsRootSaga from './StarWarsSagas';
import githubRootSaga from './GitHubSagas';

export default function* rootSaga() {
	yield all([
		starWarsRootSaga(),
		githubRootSaga(),
	]);
}
