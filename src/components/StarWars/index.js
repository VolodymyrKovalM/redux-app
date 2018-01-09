import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader';
import Films from './Films';

import './styles.scss';

/* eslint-disable */
class StarWars extends Component {
	static propTypes = {
		isLoading: PropTypes.bool.isRequired,
	}

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { swData, getInitialData, avatars } = this.props;
		console.log(this.props);

		if (!swData) {
			getInitialData('https://swapi.co/api/people/')
				.then(() => {
					this.getFilmsData();
				});
		}
	}

	getFilmsData() {
		const { swData, fetchFilmsData } = this.props;
		const filmsUrls = swData.herosInCurrentPage[swData.currentIndex].films;

		fetchFilmsData(filmsUrls);
	}

	render() {
		const { isLoading, swData, avatars, onPrevButtonClick, onNextButtonClick } = this.props;

		if (isLoading) {
			return <Preloader className="overlay" />;
		}

		const index = swData.currentIndex;
		const hero = swData.herosInCurrentPage[index];

		return (
			<div className="info-container">
				<h1 className="info-title">Star Wars Heroes</h1>
				<div className="hero-info">
					<div>
						<img className="hero-avatar" src={avatars[index]} alt="Avatar" />
						<div className="control-buttons">
							<button
								onClick={() => { onPrevButtonClick(swData); }}
								disabled={index === 0 && !swData.pagesData.previous}
							>
								Prev
							</button>
							<button
								onClick={() => { onNextButtonClick(swData); }}
								disabled={index === swData.herosInCurrentPage.length - 1 && !swData.pagesData.next}
							>
								Next
							</button>
						</div>
					</div>
					<div>
						<span className="info-cell">Name: {hero.name}</span>
						<span className="info-cell">Height: {hero.height / 100} m</span>
						<span className="info-cell">Mass: {hero.mass} kg</span>
						<span className="info-cell">Hair Color: {hero.hair_color}</span>
						<span className="info-cell">Skin Color: {hero.skin_color}</span>
						<span className="info-cell">Eye Color: {hero.eye_color}</span>
						<span className="info-cell">Birth Year: {hero.birth_year}</span>
						<span className="info-cell">Gender: {hero.gender}</span>
					</div>
					{swData.IsFilmsDataReady ? <Films films={swData.films} /> : <Preloader className="overlay small-preloader" />}
				</div>
			</div>
		);
	}
}

export default StarWars;
