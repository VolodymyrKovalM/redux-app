import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const User = ({ userData, user, reset }) => {
	return (
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
};

export default User;
