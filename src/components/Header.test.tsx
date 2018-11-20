import {shallow} from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
    it('Should render a simple ts header only having `data-ts="TopBar"`', () => {
        const header = shallow(<Header/>);

        expect(header.html()).toBe('<header data-ts="TopBar"></header>');
    });

    it('Should render a simple ts header only having `data-ts="TopBar"` and given props', () => {
        const header = shallow(<Header className="test" title="tradeshift"/>);

        expect(header.html()).toBe('<header data-ts="TopBar" class="test" title="tradeshift"></header>');
    });

    it('Should render a simple ts header with children correctly', () => {
        const header = shallow(<Header><a href="https://tradeshift.com/">Tradeshift</a></Header>);

        expect(header.find('a')).toHaveLength(1);
    });
});