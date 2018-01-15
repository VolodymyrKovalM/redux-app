import { all } from 'redux-saga/effects';
import { watchRequestUserData } from './watchers';

export default function* githubRootSaga() {
	yield all([
		watchRequestUserData(),
	]);
}
