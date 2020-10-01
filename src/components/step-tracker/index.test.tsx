import React from 'react';
import { shallow } from 'enzyme';
import { StepTracker } from '.';
import { Line } from '../line';

describe('StepTracker', () => {
	it('Should render the correct numbers and lines that is not finished', () => {
		const wrapper = shallow(<StepTracker currentStep={1} maxStep={2} finished={false} />);

		expect(wrapper.find('.step-tracker').length).toBe(1);
		expect(wrapper.find('.step-tracker').text()).toContain('1');
		expect(wrapper.find('.step-tracker').text()).toContain('2');
		expect(wrapper.find('.step-tracker').text()).toContain('Result');
		expect(wrapper.find('.step').length).toBe(3);
		expect(wrapper.find(Line).length).toBe(2);
	});
})
