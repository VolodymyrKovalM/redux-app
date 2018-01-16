import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import GithubPreloader from '../GithubPreloader';
import Repo from './Repo';
import * as Api from '../../api';

import BackButton from './svg/back.svg';

import './styles.scss';

class GithubRepos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userNumber: null,
		};
	}

	static propTypes = {
		github: PropTypes.object.isRequired,
		getRepos: PropTypes.func.isRequired,
	}

	componentWillMount() {
		const { github, getRepos, match } = this.props;
		const allUsers = github.users;
		const userName = match.params.login;
		const user = Api.getUserDataByName(allUsers, userName);

		getRepos(user);
		this.setState({ userNumber: user });
		console.log(this.props);
	}

	render() {
		const { github } = this.props;
		const { isLoading } = github;
		const { userNumber } = this.state;
		const userData = github.users[userNumber].data;
		const userRepos = github.users[userNumber].repos;

		if (isLoading || !userRepos) {
			return <GithubPreloader />;
		}

		return (
			<div className="repos-page-container">
				<Link to="/github" className="back-btn">
					<BackButton width={35} height={35} />
				</Link>
				<div className="user">
					<div className="user-name">{userData.login} repositories</div>
					<img className="user-avatar" src={userData.avatar_url} alt={userData.login} />
				</div>
				<ul className="repos-list">
					{userRepos.map(repo => (
						<Repo key={repo.id} repoData={repo} />
					))}
				</ul>
			</div>
		);
	}
}

export default GithubRepos;
