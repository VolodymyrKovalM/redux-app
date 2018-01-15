import { takeEvery } from 'redux-saga/effects';
import { fetchUserData } from './workers';
import * as ActionTypes from '../../actions/ActionTypes';

export function* watchRequestUserData() {
	yield takeEvery(ActionTypes.REQUEST_USER_DATA, fetchUserData);
}
