import React from 'react';
import { connect } from 'react-redux';
import GithubCompareUsers from '../../components/GithubCompareUsers';

const mapStateToProps = state => ({
	github: state.github,
});

export default connect(mapStateToProps, null)(GithubCompareUsers);
