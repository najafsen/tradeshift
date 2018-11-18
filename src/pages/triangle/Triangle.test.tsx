import {mount} from 'enzyme';
import * as React from 'react';
import Triangle from './Triangle';
import {MESSAGES} from './TriangleResult';

describe('Triangle Integration', () => {
    it('Should show correct triangle type by changing inputs', () => {
        const triangle = mount(<Triangle/>);

        const inputs = triangle.find('input');
        const result = triangle.find('h2');


        // initial type must be "invalid inputs"
        expect(result.text()).toBe(MESSAGES.invalidInputs);


        // test an equilateral type
        inputs.at(0).simulate('change', {target: {name: 'edgeA', value: '12.5'}});
        inputs.at(1).simulate('change', {target: {name: 'edgeB', value: '12.5'}});
        inputs.at(2).simulate('change', {target: {name: 'edgeC', value: '12.5'}});
        expect(result.text()).toBe(MESSAGES.equilateral);


        // test a isosceles type
        inputs.at(1).simulate('change', {target: {name: 'edgeB', value: '7'}});
        expect(result.text()).toBe(MESSAGES.isosceles);


        // test a scalene type
        inputs.at(2).simulate('change', {target: {name: 'edgeC', value: '6.6'}});
        expect(result.text()).toBe(MESSAGES.scalene);


        // test invalid triangle edges size (a + b <= c)
        inputs.at(2).simulate('change', {target: {name: 'edgeC', value: '4'}});
        expect(result.text()).toBe(MESSAGES.notATriangle);


        // test zero length edge
        inputs.at(0).simulate('change', {target: {name: 'edgeC', value: '0'}});
        expect(result.text()).toBe(MESSAGES.invalidInputs);


        // test zero length edge
        inputs.at(0).simulate('change', {target: {name: 'edgeC', value: 'any_string!'}});
        expect(result.text()).toBe(MESSAGES.invalidInputs);


        // test for all zeros
        inputs.at(0).simulate('change', {target: {name: 'edgeA', value: '0'}});
        inputs.at(1).simulate('change', {target: {name: 'edgeB', value: 0}});
        inputs.at(2).simulate('change', {target: {name: 'edgeC', value: '0.0'}});
        expect(result.text()).toBe(MESSAGES.invalidInputs);

    });
});