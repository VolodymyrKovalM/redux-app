import starwarsReducer from './starwars.reducer';
import githubReducer from './github.reducer';

const initialState = { swData: { pagesData: null, isLoading: true } };

const reducer = (state = initialState, action) => ({
	...state,
	swData: starwarsReducer(state.swData, action),
	github: githubReducer(state.github, action),
});

export default reducer;
