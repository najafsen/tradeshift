import {mount} from 'enzyme';
import * as React from 'react';
import TriangleForm from './TriangleForm';

describe('TriangleForm', () => {
    it('Should show 3 inputs connected to local state', () => {
        const mockChangeHandler = jest.fn();
        const triangle = mount(<TriangleForm onEdgeChange={mockChangeHandler}/>);

        expect(triangle.state()).toEqual({edgeA: '', edgeB: '', edgeC: ''});

        expect(mockChangeHandler.mock.calls).toHaveLength(0);

        const inputs = triangle.find('input');

        expect(inputs).toHaveLength(3);

        inputs.at(0).simulate('change', {target: {name: 'edgeA', value: '12'}});
        expect(triangle.state()).toEqual({edgeA: '12', edgeB: '', edgeC: ''});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(12, NaN, NaN);


        inputs.at(1).simulate('change', {target: {name: 'edgeB', value: 12.5}});
        expect(triangle.state()).toEqual({edgeA: '12', edgeB: 12.5, edgeC: ''});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(12, 12.5, NaN);


        inputs.at(2).simulate('change', {target: {name: 'edgeC', value: 'invalid_string'}});
        expect(triangle.state()).toEqual({edgeA: '12', edgeB: 12.5, edgeC: 'invalid_string'});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(12, 12.5, NaN);

        expect(mockChangeHandler.mock.calls).toHaveLength(3);
    });
});