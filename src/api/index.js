/* eslint-disable import/prefer-default-export */

export function fetchSingleUrl(url) {
	return fetch(url)
		.then(res => res.json())
		.then(data => data);
}

export function fetchMultipleUrls(urls) {
	const promises = urls.map(url => fetch(url));

	return Promise.all(promises)
		.then(responses => Promise.all(responses.map(response => response.json())))
		.then(data => data);
}

export function isUserTheSame(allUsers, userName) {
	for (let user in allUsers) {
		if (allUsers[user].data && allUsers[user].data.login === userName) {
			return true;
		}
	}

	return false;
}

export function getUserDataByName(allUsers, userName) {
	for (let user in allUsers) {
		if (allUsers[user].data && allUsers[user].data.login === userName) {
			return user;
		}
	}

	return false;
}
