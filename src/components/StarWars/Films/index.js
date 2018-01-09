import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

const propTypes = {
	films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Films = ({ films }) => (
	<ul>
		{films.map(film => (
			<li key={uuid()} className="info-cell">Episode {film.episode_id}: {film.title}</li>
		))}
	</ul>
);

Films.propTypes = propTypes;

export default Films;
