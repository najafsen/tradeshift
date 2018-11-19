import {shallow} from 'enzyme';
import React from 'react';
import MainContent from './MainContent';

describe('MainContent', () => {
    it('Should render a simple ts mainContent correctly', () => {
        const mainContent = shallow(<MainContent/>);

        expect(mainContent.html()).toBe('<div data-ts="MainContent"></div>');
    });

    it('Should render a simple ts mainContent with some div props correctly', () => {
        const mainContent = shallow(<MainContent className="ts" title="tradeshift"/>);

        expect(mainContent.html()).toBe('<div data-ts="MainContent" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts mainContent with some div props correctly', () => {
        const mainContent = shallow(<MainContent><h1>Tradeshift</h1></MainContent>);

        expect(mainContent.find('h1')).toHaveLength(1);
    });
});