import React from 'react';
import { shallow } from 'enzyme';
import { LoadingRing } from '.';

describe('LoadingRing', () => {
	it('Should show a loading ring', () => {
		const wrapper = shallow(<LoadingRing />);

		expect(wrapper.find('.lds-ring').length).toBe(1);
	});
});
