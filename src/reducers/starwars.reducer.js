import * as asyncTypes from '../actions/asyncActions';

const initialState = { pagesData: null, isLoading: true };

const starwarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case asyncTypes.START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case asyncTypes.START_FETCHING_FILMS:
			return {
				...state,
				IsFilmsDataReady: false,
			};
		case asyncTypes.RECEIVED_PAGES_DATA: {
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
		case asyncTypes.RECEIVED_FILMS:
			return {
				...state,
				films: action.payload,
				IsFilmsDataReady: true,
			};
		case asyncTypes.SHOW_PREV_HERO:
			return {
				...state,
				currentIndex: state.currentIndex - 1,
			};
		case asyncTypes.SHOW_NEXT_HERO:
			return {
				...state,
				currentIndex: state.currentIndex + 1,
			};
		default:
			return state;
	}
};

export default starwarsReducer;
