import {shallow} from 'enzyme';
import React from 'react';
import Form from './Form';
import Input from './Input';

describe('Form', () => {
    it('Should render a simple ts form only having `data-ts="Form"`', () => {
        const form = shallow(<Form/>);
        expect(form.html()).toBe('<form data-ts="Form"></form>');
    });

    it('Should render a simple ts form only having `data-ts="Form"` and given props', () => {
        const form = shallow(<Form target="_blank" className="test"/>);

        expect(form.html()).toBe('<form data-ts="Form" target="_blank" class="test"></form>');
    });

    it('Should render a simple ts form with children correctly', () => {
        const form = shallow(<Form target="_blank" className="test"><Input name="tradeshift"/></Form>);

        expect(form.find(Input)).toHaveLength(1);
    });
});