import * as starWarsTypes from '../actions/ActionTypes';

const initialState = { pagesData: null, isLoading: false };

const starwarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case starWarsTypes.START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case starWarsTypes.START_FETCHING_FILMS:
			return {
				...state,
				IsFilmsDataReady: false,
			};
		case starWarsTypes.RECEIVED_PAGES_DATA: {
			let index = 0;
			if (action.changePage === 'PREV') {
				index = action.payload.results.length - 1;
			} else if (action.changePage === 'NEXT') {
				index = 0;
			}
			return {
				...state,
				pagesData: action.payload,
				herosInCurrentPage: action.payload.results,
				currentIndex: index,
				IsFilmsDataReady: false,
				isLoading: false,
			};
		}
		case starWarsTypes.RECEIVED_FILMS:
			return {
				...state,
				films: action.payload,
				IsFilmsDataReady: true,
			};
		case starWarsTypes.SHOW_PREV_HERO_IN_CURRENT_PAGE:
			return {
				...state,
				currentIndex: state.currentIndex - 1,
			};
		case starWarsTypes.SHOW_NEXT_HERO_IN_CURRENT_PAGE:
			return {
				...state,
				currentIndex: state.currentIndex + 1,
			};
		default:
			return state;
	}
};

export default starwarsReducer;
