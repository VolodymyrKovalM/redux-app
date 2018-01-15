import React from 'react';
import { connect } from 'react-redux';
import GithubCompareUsers from '../../components/GithubCompareUsers';
import {
	onInputChange,
	requestUserData,
	resetUserData,
	cancelError,
} from '../../actions/GithubActions';

const mapStateToProps = state => ({
	github: state.github,
});

const mapDispatchToProps = dispatch => ({
	onInputChange(value, user) {
		dispatch(onInputChange(value, user));
	},
	onFormSubmit(user) {
		dispatch(requestUserData(user));
	},
	onReset(user) {
		dispatch(resetUserData(user));
	},
	onCancelError() {
		dispatch(cancelError());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(GithubCompareUsers);
