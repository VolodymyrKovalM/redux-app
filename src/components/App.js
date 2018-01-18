import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Head from './Head';
import StarWars from '../containers/views/StarWars';
import GithubCompareUsers from '../containers/views/GithubCompareUsers';
import GithubRepos from '../containers/views/GithubRepos';
import NotFound from './NotFound';
import Home from './Home';

const App = () => (
	<div>
		<Head />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/starwars" component={StarWars} />
			<Route exact path="/github" component={GithubCompareUsers} />
			<Route path="/github/repos/:login" component={GithubRepos} />
			<Route component={NotFound} />
		</Switch>
	</div>
);

export default App;
