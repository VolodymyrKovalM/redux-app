import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import StarWars from '../containers/views/StarWars';
import GithubCompareUsers from '../containers/views/GithubCompareUsers';
import GithubRepos from '../containers/views/GithubRepos';

const App = () => (
	<div>
		<Head />
		<Switch>
			<Route path="/starwars" component={StarWars} />
			<Route exact path="/github" component={GithubCompareUsers} />
			<Route path="/github/repos/:login" component={GithubRepos} />
		</Switch>
	</div>
);

export default App;
