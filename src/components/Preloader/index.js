import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/*
	eslint-disable react/self-closing-comp
*/

const propTypes = {
	className: PropTypes.string.isRequired,
};

const Preloader = ({ className }) => (
	<div className={className}>
		<div className="preloader">
			<div className="preloader-bar"></div>
		</div>
	</div>
);

Preloader.propTypes = propTypes;

export default Preloader;
