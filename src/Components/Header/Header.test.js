import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme'

describe('Header', () => {
    it('without component', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot()
    })
})