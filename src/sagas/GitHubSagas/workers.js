import { call, put, select } from 'redux-saga/effects';

import {
	receivedUserData,
	receivedUserRepos,
	errorUserIsTheSame,
	errorUserNotFound,
} from '../../actions/GithubActions';
import * as Api from '../../api';

/* eslint-disable no-console */
export function* fetchUserData(action) {
	try {
		const state = yield select(state => state.github);
		const userName = state.users[action.payload].name;
		const isUserTheSame = Api.isUserTheSame(state.users, userName);
		if (isUserTheSame) {
			yield put(errorUserIsTheSame(userName, action.payload));
		} else {
			const url = `https://api.github.com/users/${userName}`;
			const response = yield call(Api.fetchSingleUrl, url);
			if (response.message === 'Not Found') {
				yield put(errorUserNotFound(userName, action.payload));
			} else {
				yield put(receivedUserData(response, action.payload));
			}
		}
	} catch (error) {
		console.log(error);
	}
}

export function* fetchUserRepos(action) {
	try {
		const state = yield select(state => state.github);
		const url = state.users[action.userNumber].data.repos_url;
		const response = yield call(Api.fetchSingleUrl, url);
		yield put(receivedUserRepos(response, action.userNumber));
	} catch (error) {
		console.log(error);
	}
}
