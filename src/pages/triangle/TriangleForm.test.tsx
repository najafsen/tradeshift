import {mount} from 'enzyme';
import * as React from 'react';
import Input from '../../components/Input';
import TriangleForm from './TriangleForm';

describe('TriangleForm', () => {
    let triangleForm: any;
    let mockChangeHandler: any;
    let inputs: any;

    beforeEach(() => {
        mockChangeHandler = jest.fn();
        triangleForm = mount(<TriangleForm onEdgeChange={mockChangeHandler}/>);
        inputs = triangleForm.find(Input);
    });

    it('Should have correct initialization', () => {
        expect(mockChangeHandler.mock.calls).toHaveLength(0);
        expect(triangleForm.state()).toEqual({edgeA: '', edgeB: '', edgeC: ''});
        expect(inputs).toHaveLength(3);
    });

    it('Should connect edgeA input to correct state', () => {
        inputs.at(0).prop('onChange')({target: {name: 'edgeA', value: '12'}});
        expect(triangleForm.state()).toEqual({edgeA: '12', edgeB: '', edgeC: ''});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(12, NaN, NaN);
    });

    it('Should connect edgeB input to correct state', () => {
        inputs.at(1).prop('onChange')({target: {name: 'edgeB', value: 12.5}});
        expect(triangleForm.state()).toEqual({edgeA: '', edgeB: 12.5, edgeC: ''});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(NaN, 12.5, NaN);
    });

    it('Should connect edgeC input to correct state', () => {
        inputs.at(2).prop('onChange')({target: {name: 'edgeC', value: 'invalid_value'}});
        expect(triangleForm.state()).toEqual({edgeA: '', edgeB: '', edgeC: 'invalid_value'});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(NaN, NaN, NaN);
    });

    it('Should call the `onEdgeChange` with correct parsed numbers when giving valid values', () => {
        inputs.at(0).prop('onChange')({target: {name: 'edgeA', value: '12'}});
        inputs.at(1).prop('onChange')({target: {name: 'edgeB', value: 12.5}});
        inputs.at(2).prop('onChange')({target: {name: 'edgeC', value: .7}});
        expect(triangleForm.state()).toEqual({edgeA: '12', edgeB: 12.5, edgeC: 0.7});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(12, 12.5, .7);
        expect(mockChangeHandler.mock.calls).toHaveLength(3);
    });

    it('Should call the `onEdgeChange` with NaN when giving invalid values', () => {
        inputs.at(0).prop('onChange')({target: {name: 'edgeA', value: ''}});
        inputs.at(1).prop('onChange')({target: {name: 'edgeB', value: 'a_string'}});
        inputs.at(2).prop('onChange')({target: {name: 'edgeC', value: '--.7.--'}});
        expect(triangleForm.state()).toEqual({edgeA: '', edgeB: 'a_string', edgeC: '--.7.--'});
        expect(mockChangeHandler).toHaveBeenLastCalledWith(NaN, NaN, NaN);
        expect(mockChangeHandler.mock.calls).toHaveLength(3);
    });
});