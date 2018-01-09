/* eslint-disable import/prefer-default-export */

export const fetchData = url => (dispatch, action) => {
	dispatch(action());
	return fetch(url).then(res => res.json());
};

export const fetchFromMultipleUrls = urls => (dispatch, action) => {
	dispatch(action());

	const promises = urls.map(url => fetch(url));

	return Promise.all(promises)
		.then(responses => Promise.all(responses.map(response => response.json())));
};
