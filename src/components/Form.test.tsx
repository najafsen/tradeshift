import {shallow} from 'enzyme';
import React from 'react';
import Form from './Form';

describe('Form', () => {
    it('Should render a simple ts form correctly', () => {
        const form = shallow(<Form/>);

        expect(form.find('form').length).toBe(1);
        expect(form.props()['data-ts']).toBe('Form');
        expect(form.props()['target']).toBeUndefined();
    });

    it('Should render a simple ts form with some props correctly', () => {
        const form = shallow(<Form target="_blank" className="test"/>);

        expect(form.find('form').length).toBe(1);
        expect(form.props()['data-ts']).toBe('Form');
        expect(form.props()['target']).toBe('_blank');
        expect(form.hasClass('test')).toBe(true);
    });
});