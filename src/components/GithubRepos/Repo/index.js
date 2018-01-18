import React from 'react';
import PropTypes from 'prop-types';

import StarIcon from './svg/star.svg';

import './styles.scss';

const propTypes = {
	repoData: PropTypes.object.isRequired,
};
/* eslint-disable */
const Repo = ({ repoData }) => (
	<li className="repo">
		<a href={repoData.html_url} className="repo-link" target="_blank"></a>
		<div className="repo-name">{repoData.name}</div>
		<div className="repo-lang">{repoData.language}</div>
		<div className="repo-stars">
			<StarIcon width={20} height={20} />
			{repoData.stargazers_count}
		</div>
	</li>
);

Repo.propTypes = propTypes;

export default Repo;
