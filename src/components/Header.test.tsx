import {shallow} from 'enzyme';
import React from 'react';
import Header from './Header';

describe('Header', () => {
    it('Should render a simple ts header correctly', () => {
        const header = shallow(<Header/>);

        expect(header.find('header').length).toBe(1);
        expect(header.props()['data-ts']).toBe('TopBar');
    });

    it('Should render a simple ts header with some props correctly', () => {
        const header = shallow(<Header className="test" title="tradeshift"/>);

        expect(header.find('header').length).toBe(1);
        expect(header.props()['data-ts']).toBe('TopBar');
        expect(header.props()['title']).toBe('tradeshift');
        expect(header.hasClass('test')).toBe(true);
    });
});