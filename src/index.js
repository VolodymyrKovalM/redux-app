import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Root from './containers/RootContainer';
import configureStore from './store';
import images from './store/imagesStore';

import './styles.scss';

const initialState = { swData: { pagesData: null, isLoading: true }, avatars: images };

const history = createHistory();
const store = configureStore(initialState);

render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept('./containers/RootContainer', () => {
		/* eslint-disable global-require */
		const NewRoot = require('./containers/RootContainer').default;
		render(
			<AppContainer>
				<NewRoot store={store} history={history} />
			</AppContainer>,
			document.getElementById('root'),
		);
	});
}
