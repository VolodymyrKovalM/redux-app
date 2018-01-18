import React from 'react';
import PropTypes from 'prop-types';
import GithubPreloader from '../../GithubPreloader';
import Error from '../Error';

import './styles.scss';

const propTypes = {
	user: PropTypes.string.isRequired,
	isFetching: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onErrorCancel: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
};

const Form = ({
	user, isFetching, onChange, onSubmit, error, onErrorCancel,
}) => (
	<form
		className="user-search-form"
		onSubmit={e => { onSubmit(e, user); }}
		action="#"
	>
		{ error && <Error onCancel={() => { onErrorCancel(user); }} message={error.message} /> }
		{ isFetching && <GithubPreloader className="overlay github-small-preloader" /> }
		<input
			type="text"
			placeholder="Enter github user name"
			onChange={e => { onChange(e, user); }}
		/>
		<button type="submit" className="btn">Search</button>
	</form>
);

Form.propTypes = propTypes;

export default Form;
