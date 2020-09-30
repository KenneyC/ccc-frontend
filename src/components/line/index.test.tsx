import React from 'react';
import { shallow } from 'enzyme';
import { Line } from '.';

describe('Line', () => {
	it('Should display a filled in line when activated', () => {
		const wrapper = shallow(<Line activated />);

		expect(wrapper.find('.line').length).toBe(1);
		expect(wrapper.find('.line-activated').length).toBe(1);
	});

	it('Should display an empty line when activated', () => {
		const wrapper = shallow(<Line activated={false} />);

		expect(wrapper.find('.line').length).toBe(1);
		expect(wrapper.find('.line-activated').length).toBe(0);
	});
});
