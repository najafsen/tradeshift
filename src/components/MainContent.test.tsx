import {shallow} from 'enzyme';
import React from 'react';
import MainContent from './MainContent';

describe('MainContent', () => {
    it('Should render a simple ts mainContent only having `data-ts="MainContent"`', () => {
        const mainContent = shallow(<MainContent/>);

        expect(mainContent.html()).toBe('<div data-ts="MainContent"></div>');
    });

    it('Should render a simple ts mainContent only having `data-ts="MainContent"` and given props', () => {
        const mainContent = shallow(<MainContent className="ts" title="tradeshift"/>);

        expect(mainContent.html()).toBe('<div data-ts="MainContent" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts mainContent with children correctly', () => {
        const mainContent = shallow(<MainContent><h1>Tradeshift</h1></MainContent>);

        expect(mainContent.find('h1')).toHaveLength(1);
    });
});