import React from 'react';
import { connect } from 'react-redux';
import GithubRepos from '../../components/GithubRepos';

import { requestUserRepos } from '../../actions/GithubActions';

const mapStateToProps = state => ({
	github: state.github,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	getRepos(user) {
		dispatch(requestUserRepos(user));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubRepos);
