import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubPreloader from '../GithubPreloader';
import Form from './Form';
import User from './User';

import './styles.scss';

/* eslint-disable no-console */
class GitHubCompareUsers extends Component {
	static propTypes = {
		github: PropTypes.object.isRequired,
		onInputChange: PropTypes.func.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		onReset: PropTypes.func.isRequired,
		onCancelError: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	componentWillMount() {
		console.log(this.props);
	}

	handleInputChange(event, user) {
		this.props.onInputChange(event.target.value, user);
	}

	handleFormSubmit(event, user) {
		event.preventDefault();
		this.props.onFormSubmit(user);
	}

	handleReset(user) {
		this.props.onReset(user);
	}

	render() {
		const { github } = this.props;
		const { users, isLoading } = github;
		const { userOne, userTwo } = users;
		return (
			<div className="forms-container">
				{ userOne.data ?
					<User
						reset={this.handleReset}
						user="userOne"
						userData={userOne.data}
					/> :
					<Form
						onErrorCancel={this.props.onCancelError}
						error={userOne.error}
						onSubmit={this.handleFormSubmit}
						onChange={this.handleInputChange}
						user="userOne"
						isFetching={userOne.isFetching}
					/>
				}
				{ (userOne.data && userTwo.data) &&
					<button className="btn">Compare</button>
				}
				{ userTwo.data ?
					<User
						reset={this.handleReset}
						user="userTwo"
						userData={userTwo.data}
					/> :
					<Form
						onErrorCancel={this.props.onCancelError}
						error={userTwo.error}
						onSubmit={this.handleFormSubmit}
						onChange={this.handleInputChange}
						user="userTwo"
						isFetching={userTwo.isFetching}
					/>
				}
				{ isLoading && <GithubPreloader />}
			</div>
		);
	}
}

export default GitHubCompareUsers;
