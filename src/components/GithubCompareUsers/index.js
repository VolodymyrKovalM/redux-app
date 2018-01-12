import React, { Component } from 'react';
import GithubPreloader from '../GithubPreloader';
import Form from './Form';

import './styles.scss';

/* eslint-disable no-useless-constructor */
class GitHubCompareUsers extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { github } = this.props;
		console.log(this.props);
	}

	render() {
		return (
			<div className="forms-container">
				<Form />
				<Form />
			</div>
		);
	}
}

export default GitHubCompareUsers;
