import reducer from '../reducers/starwars.reducer';
import {
	startFetching,
	startFetchingFilms,
	receivedPagesData,
	receivedFilms,
} from '../actions/StarWarsActions';

describe('star wars reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({ pagesData: null, isLoading: false });
	});

	it('should handle START_FETCHING action', () => {
		expect(reducer(undefined, startFetching())).toEqual({ pagesData: null, isLoading: true });
	});

	it('should handle START_FETCHING_FILMS action', () => {
		const expected = {
			pagesData: null,
			isLoading: false,
			IsFilmsDataReady: false,
		};

		expect(reducer(undefined, startFetchingFilms())).toEqual(expected);
	});

	it('should handle RECEIVED_PAGES_DATA action', () => {
		const data = {
			count: 87,
			prev: null,
			results: [
				{
					name: 'Shmi Skywalker',
					height: 163,
				},
				{
					name: 'Darth Maul',
					height: 165,
				},
			],
		};

		const expected = {
			pagesData: data,
			herosInCurrentPage: data.results,
			currentIndex: 0,
			isLoading: false,
			IsFilmsDataReady: false,
		};

		expect(reducer(undefined, receivedPagesData(data))).toEqual(expected);
	});

	it('should handle RECEIVED_FILMS action', () => {
		const data = [
			{
				title: 'The Phantom Menace 1',
				episode_id: 5,
			},
			{
				title: 'The Phantom Menace 2',
				episode_id: 6,
			},
		];

		const expected = {
			films: data,
			pagesData: null,
			isLoading: false,
			IsFilmsDataReady: true,
		};

		expect(reducer(undefined, receivedFilms(data))).toEqual(expected);
	});
});
