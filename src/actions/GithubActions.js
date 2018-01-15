import {
	ON_INPUT_CHANGE,
	ON_FORM_SUBMIT,
	REQUEST_USER_DATA,
	RECEIVED_USER_DATA,
	RESET_USER_DATA,
	ERROR_USER_IS_THE_SAME,
	ERROR_USER_NOT_FOUND,
	CANCEL_ERROR,
} from './ActionTypes';

export const onInputChange = (value, userNumber) => ({
	type: ON_INPUT_CHANGE,
	payload: {
		inputValue: value,
		userNumber,
	}
});

export const requestUserData = userNumber => ({
	type: REQUEST_USER_DATA,
	payload: userNumber,
});

export const receivedUserData = (data, userNumber) => ({
	type: RECEIVED_USER_DATA,
	payload: data,
	userNumber,
});

export const resetUserData = userNumber => ({
	type: RESET_USER_DATA,
	payload: userNumber,
});

export const errorUserIsTheSame = (userName, userNumber) => ({
	type: ERROR_USER_IS_THE_SAME,
	payload: userName,
	userNumber,
});

export const errorUserNotFound = (userName, userNumber) => ({
	type: ERROR_USER_NOT_FOUND,
	payload: userName,
	userNumber,
});

export const cancelError = () => ({
	type: CANCEL_ERROR,
});
