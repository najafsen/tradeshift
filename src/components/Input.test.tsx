import {shallow} from 'enzyme';
import React from 'react';
import Input from './Input';

describe('Input', () => {
    it('Should render a simple ts input correctly', () => {
        const input = shallow(<Input/>);

        expect(input.html()).toBe('<fieldset><label><input/></label></fieldset>');
    });

    it('Should render a simple ts input with label correctly', () => {
        const input = shallow(<Input label="tradeshift"/>);

        expect(input.html()).toBe('<fieldset><label><span>tradeshift</span><input/></label></fieldset>');
    });

    it('Should render a simple ts input with label and className correctly', () => {
        const input = shallow(<Input label="tradeshift" className="ts"/>);

        expect(input.html()).toBe('<fieldset><label><span>tradeshift</span><input class="ts"/></label></fieldset>');
    });
});