import React from 'react';
import { connect } from 'react-redux';
import StarWars from '../../components/StarWars';
// import { fetchData, fetchFromMultipleUrls } from '../../api';
import {
	startFetching,
	showPrevHero,
	showNextHero,
} from '../../actions/StarWarsActions';

const mapStateToProps = state => ({
	swData: state.swData,
	avatars: state.avatars,
});

const mapDispatchToProps = dispatch => ({
	getInitialData(url) {
		dispatch(startFetching(url));
	},
	onPrevButtonClick() {
		dispatch(showPrevHero());
	},
	onNextButtonClick() {
		dispatch(showNextHero());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(StarWars);
