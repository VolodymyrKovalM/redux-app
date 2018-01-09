import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';

const history = createBrowserHistory();
const middleware = [routerMiddleware(history), thunk];

export default function (initialState = {}) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware),
	);
}
