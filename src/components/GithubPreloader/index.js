import React from 'react';

import Icon from './svg/github.svg';

const GithubPreloader = ({ className }) => (
	<div className={className}>
		<Icon width={150} height={150} />
	</div>
);

GithubPreloader.defaultProps = {
	className: 'overlay',
};

export default GithubPreloader;
