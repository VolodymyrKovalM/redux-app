import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import StarWars from '../containers/views/StarWars';
import GithubCompareUsers from '../containers/views/GithubCompareUsers';

const App = () => (
	<div>
		<Head />
		<Switch>
			<Route path="/starwars" component={StarWars} />
			<Route path="/github" component={GithubCompareUsers} />
		</Switch>
	</div>
);

export default App;
