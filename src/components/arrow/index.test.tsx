import React from 'react';
import { shallow } from 'enzyme';
import { Arrow } from '.';

describe('Arrow', () => {
	it('Should contain normal arrow sprite when no specific props are passed', () => {
		const wrapper = shallow(<Arrow />);

		expect(wrapper.find('.arrow-sprite')).toHaveLength(1);
	});

	it('Should contain a directed arrow sprite when a direction is passed', () => {
		const wrapper = shallow(<Arrow direction="up" />);

		expect(wrapper.find('.arrow-sprite')).toHaveLength(1);
		expect(wrapper.find('.arrow-sprite-up')).toHaveLength(1);
	});

	it('Should contain a rotated arrow sprite when rotated flag is passed', () => {
		const wrapper = shallow(<Arrow rotated />);

		expect(wrapper.find('.arrow-sprite')).toHaveLength(1);
		expect(wrapper.find('.arrow-sprite-rotated')).toHaveLength(1);
	});

	it('Should provide the right style to the arrow sprite when arrowProperties are passed', () => {
		const mockArrowProperties = {
			borderColor: 'black',
			top: 10,
		};
		const wrapper = shallow(<Arrow arrowProperties={mockArrowProperties} />);

		expect(wrapper.find('.arrow-sprite').props().style).toBe(mockArrowProperties);
	});
});
