import React from 'react';
import { shallow } from 'enzyme';
import { SimpleButton } from '.';

describe('SimpleButton', () => {
	let mockOnClick;

	beforeEach(() => {
		mockOnClick = jest.fn();
	});

	it('Should display a simple button with the correct text', () => {
		const wrapper = shallow(<SimpleButton text="testText" onClick={mockOnClick} />);

		const button = wrapper.find('.simple-button');
		expect(button.length).toBe(1);
		expect(button.text()).toBe('testText');

		button.simulate('click');
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('Should display a simple button that is disabled', () => {
		const wrapper = shallow(<SimpleButton disabled onClick={mockOnClick} />);

		const button = wrapper.find('.simple-button');
		expect(button.length).toBe(1);
		expect(button.props().disabled).toBe(true);
	});
});
