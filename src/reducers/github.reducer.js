import * as githubTypes from '../actions/ActionTypes';

const initialState = {
	users: {
		userOne: {
			data: null,
			repos: null,
			name: null,
			error: null,
			isFetching: false,
		},
		userTwo: {
			data: null,
			repos: null,
			name: null,
			error: null,
			isFetching: false,
		},
	},
	isLoading: false,
};

const githubReducer = (state = initialState, action) => {
	switch (action.type) {
		case githubTypes.ON_INPUT_CHANGE:
			return {
				...state,
				users: {
					...state.users,
					[action.payload.userNumber]: {
						...state.users[action.payload.userNumber],
						name: action.payload.inputValue,
					},
				},
			};
		case githubTypes.REQUEST_USER_DATA:
			return {
				...state,
				users: {
					...state.users,
					[action.payload]: {
						...state.users[action.payload],
						isFetching: true,
					},
				},
			};
		case githubTypes.RECEIVED_USER_DATA:
			return {
				...state,
				users: {
					...state.users,
					[action.userNumber]: {
						...state.users[action.userNumber],
						data: action.payload,
						isFetching: false,
					}
				},
			};
		case githubTypes.RESET_USER_DATA:
			return {
				...state,
				users: {
					...state.users,
					[action.payload]: {
						...state.users[action.userNumber],
						data: null,
					}
				},
				error: null,
			};
		case githubTypes.ERROR_USER_IS_THE_SAME:
			return {
				...state,
				users: {
					...state.users,
					[action.userNumber]: {
						...state.users[action.userNumber],
						error: {
							message: `User ${action.payload} is already a participant. No need to compare two identical users`
						},
						isFetching: false,
					},
				},
			};
		case githubTypes.ERROR_USER_NOT_FOUND:
			return {
				...state,
				users: {
					...state.users,
					[action.userNumber]: {
						...state.users[action.userNumber],
						error: {
							message: `User ${action.payload} is not found`
						},
						isFetching: false,
					},
				},
			};
		case githubTypes.REQUEST_USER_REPOS:
			return {
				...state,
				isLoading: true,
			};
		case githubTypes.RECEIVED_USER_REPOS:
			return {
				...state,
				isLoading: false,
				users: {
					...state.users,
					[action.userNumber]: {
						...state.users[action.userNumber],
						repos: action.payload,
					},
				},
			};
		case githubTypes.CANCEL_ERROR:
			return {
				...state,
				users: {
					...state.users,
					[action.userNumber]: {
						...state.users[action.userNumber],
						error: null,
					},
				},
			};
		default:
			return state;
	}
};

export default githubReducer;
