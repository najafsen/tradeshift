import {mount} from 'enzyme';
import * as React from 'react';
import {TriangleType} from '../../utils/triangleType';
import TriangleResult, {MESSAGES} from './TriangleResult';

describe('TriangleResult', () => {
    it('Should render a `h2` tag with `not a triangle` message', () => {
        const triangleResult = mount(<TriangleResult triangleType={TriangleType.NotATriangle}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe(MESSAGES.notATriangle);
    });

    it('Should render a `h2` tag with `scalene` message', () => {
        const triangleResult = mount(<TriangleResult triangleType={TriangleType.Scalene}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe(MESSAGES.scalene);
    });

    it('Should render a `h2` tag with `invalid inputs` message', () => {
        const triangleResult = mount(<TriangleResult triangleType={TriangleType.InvalidInputs}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe(MESSAGES.invalidInputs);
    });

    it('Should render a `h2` tag with `equilateral` message', () => {
        const triangleResult = mount(<TriangleResult triangleType={TriangleType.Equilateral}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe(MESSAGES.equilateral);
    });

    it('Should render a `h2` tag with `isosceles` message', () => {
        const triangleResult = mount(<TriangleResult triangleType={TriangleType.Isosceles}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe(MESSAGES.isosceles);
    });

    it('Should render a `h2` tag with empty message for any invalid prop', () => {
        const triangleResult = mount(<TriangleResult triangleType={'any other value' as any}/>);
        expect(triangleResult.getDOMNode().tagName.toLowerCase()).toBe('h2');
        expect(triangleResult.text()).toBe('');
    });
});