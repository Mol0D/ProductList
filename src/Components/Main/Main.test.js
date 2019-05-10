import React from 'react';
import {shallow} from 'enzyme';
import Main from './Main';

describe ("Main", () => {
    it("without components", () => {
        const wrapper = shallow(<Main/>);
        expect(wrapper).toMatchSnapshot();
    })
})