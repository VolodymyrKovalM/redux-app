import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

export default function (initialState = {}) {
	sagaMiddleware.run(rootSaga);

	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware),
	);
}
