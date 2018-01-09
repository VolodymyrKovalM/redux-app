import starwarsReducer from './starwars.reducer';

const initialState = { swData: { pagesData: null, isLoading: true } };

const reducer = (state = initialState, action) => ({
	...state,
	swData: starwarsReducer(state.swData, action),
});

export default reducer;
