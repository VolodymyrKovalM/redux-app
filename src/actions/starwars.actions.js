export const SW_DATA_FETCHED = 'SW_DATA_FETCHED';

export const setFetchedData = data => ({
	type: SW_DATA_FETCHED,
	payload: data,
});
