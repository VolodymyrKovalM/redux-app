import { all } from 'redux-saga/effects';
import { watchRequestUserData, watchRequestUserRepos } from './watchers';

export default function* githubRootSaga() {
	yield all([
		watchRequestUserData(),
		watchRequestUserRepos(),
	]);
}
