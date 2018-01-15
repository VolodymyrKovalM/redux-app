import { call, put, select } from 'redux-saga/effects';

import {
	receivedUserData,
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
				console.log(response);
				yield put(receivedUserData(response, action.payload));
			}
		}
	} catch (error) {
		console.log(error);
	}
}
