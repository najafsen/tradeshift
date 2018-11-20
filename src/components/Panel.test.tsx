import {shallow} from 'enzyme';
import React from 'react';
import Panel from './Panel';

describe('Panel', () => {
    it('Should render a simple ts panel only having `data-ts="Panel"`', () => {
        const panel = shallow(<Panel/>);

        expect(panel.html()).toBe('<div data-ts="Panel"></div>');
    });

    it('Should render a simple ts panel only having `data-ts="Panel"` and given props', () => {
        const panel = shallow(<Panel className="ts" title="tradeshift"/>);

        expect(panel.html()).toBe('<div data-ts="Panel" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts panel only having `data-ts="Panel"`, label and other props', () => {
        const panel = shallow(<Panel label="tradeshift" className="ts" title="tradeshift"/>);

        expect(panel.html()).toBe('<div data-ts="Panel" data-ts.label="tradeshift" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts panel with label and children correctly', () => {
        const panel = shallow(<Panel label="tradeshift"><h1>Tradeshift</h1></Panel>);

        expect(panel.find('h1')).toHaveLength(1);
    });
});