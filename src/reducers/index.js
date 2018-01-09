import * as asyncTypes from '../actions/asyncActions';
import * as swActions from '../actions/starwars.actions';

const initialState = { swData: null, isLoading: false };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case asyncTypes.START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case asyncTypes.START_FETCHING_FILMS:
			return {
				...state,
				swData: {
					...state.swData,
					IsFilmsDataReady: false,
				},
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
				swData: {
					pagesData: action.payload,
					herosInCurrentPage: action.payload.results,
					currentIndex: index,
					IsFilmsDataReady: false,
				},
				isLoading: false,
			};
		}
		case asyncTypes.RECEIVED_FILMS:
			return {
				...state,
				swData: {
					...state.swData,
					films: action.payload,
					IsFilmsDataReady: true,
				},
			};
		case asyncTypes.SHOW_PREV_HERO:
			return {
				...state,
				swData: {
					...state.swData,
					currentIndex: state.swData.currentIndex - 1,
				},
			};
		case asyncTypes.SHOW_NEXT_HERO:
			return {
				...state,
				swData: {
					...state.swData,
					currentIndex: state.swData.currentIndex + 1,
				},
			};
		default:
			return state;
	}
};

export default reducer;
