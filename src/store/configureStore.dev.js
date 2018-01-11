/* eslint-disable global-require */

import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

export default function (initialState = {}) {
	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middleware)),
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}

	sagaMiddleware.run(rootSaga);

	return store;
}
