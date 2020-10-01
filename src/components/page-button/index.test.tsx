import React from 'react';
import { shallow } from 'enzyme';
import { PageButton } from '.';

describe('PageButton', () => {
	let mockOnClick;
	const mockName = 'test';

	beforeEach(() => {
		mockOnClick = jest.fn();
	});

	it('Should show the correct label and behave correctly', () => {
		const wrapper = shallow(<PageButton name={mockName} onClick={mockOnClick} />);

		expect(wrapper.find('.page-button').length).toBe(1);
		expect(wrapper.find('.page-button').text()).toContain('Test');
		wrapper.find('.page-button').simulate('click');
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('Should have the correct background color', () => {
		const mockStyle = {
			backgroundColor: 'test-color',
		};
		const wrapper = shallow(
			<PageButton name={mockName} onClick={mockOnClick} style={mockStyle} />
		);

		expect(wrapper.find('.page-find').props().style).toBe(mockStyle);
	});
});
