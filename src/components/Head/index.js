import React from 'react';
import { NavLink } from 'react-router-dom';

import StarIcon from './svg/star1.svg';
import GitIcon from './svg/github.svg';

import './styles.scss';

const Head = () => (
	<header className="header">
		<NavLink
			exact
			activeClassName="menu-link-active"
			className="menu-link"
			to="/starwars"
		>
			<StarIcon width={25} height={25} />
		</NavLink>
		<NavLink
			exact
			activeClassName="menu-link-active"
			className="menu-link"
			to="/github"
		>
			<GitIcon width={25} height={25} />
		</NavLink>
	</header>
);

export default Head;
