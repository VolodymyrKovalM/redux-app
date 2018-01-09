import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import StarWars from '../containers/views/StarWars';
import SomeRoute from '../containers/views/SomeRoute';

const App = () => (
	<div>
		<Head />
		<Switch>
			<Route path="/starwars" component={StarWars} />
			<Route path="/another" component={SomeRoute} />
		</Switch>
	</div>
);

export default App;
