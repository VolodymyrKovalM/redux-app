/* eslint-disable */

import faker from 'faker';

const images = [];

for (let i = 0; i < 15; i += 1) {
	images.push(faker.image.avatar());
}

export default images;
