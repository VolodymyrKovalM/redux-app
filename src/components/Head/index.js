import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Head = () => (
	<header className="header">
		<NavLink
			exact
			activeClassName="menu-link-active"
			className="menu-link"
			to="/starwars"
		>
			Star Wars
		</NavLink>
		<NavLink
			exact
			activeClassName="menu-link-active"
			className="menu-link"
			to="/another"
		>
			Another route
		</NavLink>
	</header>
);

export default Head;
