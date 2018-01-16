import React from 'react';
import GithubPreloader from '../../GithubPreloader';
import Error from '../Error';

import './styles.scss';

const Form = ({ user, isFetching, onChange, onSubmit, error, onErrorCancel }) => {
	return (
		<form
			className="user-search-form"
			onSubmit={(e) => { onSubmit(e, user); }}
			action="#"
		>
			{ error && <Error onCancel={() => { onErrorCancel(user); }} message={error.message} /> }
			{ isFetching && <GithubPreloader className="overlay github-small-preloader"/> }
			<input
				type="text"
				placeholder="Enter github user name"
				onChange={(e) => { onChange(e, user); }}
			/>
			<button type="submit" className="btn">Search</button>
		</form>
	);
};

export default Form;
