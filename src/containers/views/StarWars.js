import React from 'react';
import { connect } from 'react-redux';
import StarWars from '../../components/StarWars';
import { fetchData, fetchFromMultipleUrls } from '../../api';
import {
	startFetching,
	receivedPagesData,
	startFetchingFilms,
	receivedFilms,
	showPrevHero,
	showNextHero,
} from '../../actions/asyncActions';

const mapStateToProps = state => ({
	swData: state.swData,
	isLoading: state.isLoading,
	avatars: state.avatars,
});

const mapDispatchToProps = dispatch => ({
	getInitialData(url) {
		return fetchData(url)(dispatch, startFetching)
			.then(data => {
				dispatch(receivedPagesData(data));
			});
	},
	fetchFilmsData(urls) {
		fetchFromMultipleUrls(urls)(dispatch, startFetchingFilms)
			.then(data => {
				dispatch(receivedFilms(data));
			});
	},
	onPrevButtonClick(data) {
		if (data.currentIndex === 0 && data.pagesData.previous) {
			fetchData(data.pagesData.previous)(dispatch, startFetching)
				.then(received => {
					dispatch(receivedPagesData(received, 'PREV'));
				});
		} else {
			dispatch(showPrevHero());
		}

		const filmsUrls = data.herosInCurrentPage[data.currentIndex].films;

		fetchFromMultipleUrls(filmsUrls)(dispatch, startFetchingFilms)
			.then(received => {
				dispatch(receivedFilms(received));
			});
	},
	onNextButtonClick(data) {
		if (data.currentIndex === data.herosInCurrentPage.length - 1) {
			fetchData(data.pagesData.next)(dispatch, startFetching)
				.then(received => {
					dispatch(receivedPagesData(received, 'NEXT'));
				});
		} else {
			dispatch(showNextHero());
		}

		const filmsUrls = data.herosInCurrentPage[data.currentIndex].films;

		fetchFromMultipleUrls(filmsUrls)(dispatch, startFetchingFilms)
			.then(received => {
				dispatch(receivedFilms(received));
			});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(StarWars);
