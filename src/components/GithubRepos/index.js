import React from 'react';

const GithubRepos = ({ match }) => (
	<div>
		Repos
		{match.params}
	</div>
);

export default GithubRepos;
