import React from 'react';
import { shallow } from 'enzyme';
import Arrow from '.';

describe('Arrow', () => {
	it('Should contain normal arrow sprite when no specific props are passed', () => {
		const wrapper = shallow(<Arrow />);

		wrapper.find('.arrow-sprite').toBeLength(1);
	});
});
