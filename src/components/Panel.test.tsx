import {shallow} from 'enzyme';
import React from 'react';
import Panel from './Panel';

describe('Panel', () => {
    it('Should render a simple ts panel correctly', () => {
        const panel = shallow(<Panel/>);

        expect(panel.html()).toBe('<div data-ts="Panel" data-ts.label=""></div>');
    });

    it('Should render a simple ts panel with some div props correctly', () => {
        const panel = shallow(<Panel className="ts" title="tradeshift"/>);

        expect(panel.html()).toBe('<div data-ts="Panel" data-ts.label="" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts panel with label and some div props correctly', () => {
        const panel = shallow(<Panel label="tradeshift" className="ts" title="tradeshift"/>);

        expect(panel.html()).toBe('<div data-ts="Panel" data-ts.label="tradeshift" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts panel with label and some div props correctly', () => {
        const panel = shallow(<Panel label="tradeshift"><h1>Tradeshift</h1></Panel>);

        expect(panel.find('h1')).toHaveLength(1);
    });
});