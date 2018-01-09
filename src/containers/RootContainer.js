import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from '../components/App';

const propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
};

const Root = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route path="/" component={App} />
		</ConnectedRouter>
	</Provider>
);

Root.propTypes = propTypes;

export default Root;
