import {shallow} from 'enzyme';
import React from 'react';
import Main from './Main';
import MainContent from './MainContent';

describe('Main', () => {
    it('Should render a simple ts main only having `data-ts="Main"`', () => {
        const main = shallow(<Main/>);

        expect(main.html()).toBe('<div data-ts="Main"></div>');
    });

    it('Should render a simple ts main only having `data-ts="Main"` and given props', () => {
        const main = shallow(<Main className="ts" title="tradeshift"/>);

        expect(main.html()).toBe('<div data-ts="Main" class="ts" title="tradeshift"></div>');
    });

    it('Should render a simple ts main with children correctly', () => {
        const main = shallow(<Main className="ts" title="tradeshift"><MainContent/></Main>);

        expect(main.find(MainContent)).toHaveLength(1);
    });
});