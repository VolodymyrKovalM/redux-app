import React from 'react';
import PropTypes from 'prop-types';

import Icon from './svg/github.svg';

const propTypes = {
	className: PropTypes.string,
};

const GithubPreloader = ({ className }) => (
	<div className={className}>
		<Icon width={150} height={150} />
	</div>
);

GithubPreloader.defaultProps = {
	className: 'overlay',
};

GithubPreloader.propTypes = propTypes;

export default GithubPreloader;
