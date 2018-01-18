import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */
const propTypes = {
	userData: PropTypes.object.isRequired,
	user: PropTypes.string.isRequired,
	reset: PropTypes.func.isRequired,
};

const User = ({ userData, user, reset }) => (
	<div className="user">
		<div className="user-name">{userData.login}</div>
		<img className="user-avatar" src={userData.avatar_url} alt={userData.login} />
		<div className="user-btns">
			<button
				onClick={() => { reset(user); }}
				className="btn"
			>
				Reset
			</button>
			<Link to={`/github/repos/${userData.login}`} className="btn">Look repos</Link>
		</div>
	</div>
);

User.propTypes = propTypes;

export default User;
