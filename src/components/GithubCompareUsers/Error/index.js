import React from 'react';

import './styles.scss';
import Icon from './svg/warning.svg';

const Error = ({ message, onCancel }) => (
	<div className="overlay github-error">
		<Icon width={50} height={50} />
		<div className="error-message">{message}</div>
		<button
			onClick={onCancel}
			className="btn"
		>Try again</button>
	</div>
);

export default Error;
