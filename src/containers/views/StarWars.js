import React from 'react';
import { connect } from 'react-redux';
import StarWars from '../../components/StarWars';
// import { fetchData, fetchFromMultipleUrls } from '../../api';
import {
	fetchHeros,
	fetchPrevPage,
	fetchNextPage,
} from '../../actions/StarWarsActions';

const mapStateToProps = state => ({
	swData: state.swData,
	avatars: state.avatars,
});

const mapDispatchToProps = dispatch => ({
	getInitialData(url) {
		dispatch(fetchHeros(url));
	},
	onPrevButtonClick() {
		dispatch(fetchPrevPage());
	},
	onNextButtonClick() {
		dispatch(fetchNextPage());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(StarWars);
