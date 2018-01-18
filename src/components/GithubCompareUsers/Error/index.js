import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import Icon from './svg/warning.svg';

const propTypes = {
	message: PropTypes.string.isRequired,
	onCancel: PropTypes.func.isRequired,
};

const Error = ({ message, onCancel }) => (
	<div className="overlay github-error">
		<Icon width={50} height={50} />
		<div className="error-message">{message}</div>
		<button
			onClick={onCancel}
			className="btn"
		>
			Try again
		</button>
	</div>
);

Error.propTypes = propTypes;

export default Error;
