/* eslint-disable import/prefer-default-export */

export function fetchHeros(url) {
	return fetch(url)
		.then(res => res.json())
		.then(data => data);
}

export function fetchFilms(urls) {
	const promises = urls.map(url => fetch(url));

	return Promise.all(promises)
		.then(responses => Promise.all(responses.map(response => response.json())))
		.then(data => data);
}
