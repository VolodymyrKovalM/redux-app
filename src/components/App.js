import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import StarWars from '../containers/views/StarWars';
import GithubCompareUsers from '../containers/views/GithubCompareUsers';
import GithubRepos from './GithubRepos';

const App = () => (
	<div>
		<Head />
		<Switch>
			<Route path="/starwars" component={StarWars} />
			<Route exact="true" path="/github" component={GithubCompareUsers} />
			<Route path="/github/repos" component={GithubRepos} />
		</Switch>
	</div>
);

export default App;
