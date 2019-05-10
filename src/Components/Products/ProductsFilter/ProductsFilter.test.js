import React from 'react';
import ProductsFilter from './ProductsFilter';
import {shallow, mount} from 'enzyme';

describe("ProductsFilter", () => {
    const props = {
        data: [{}, {}, {}]
    }

    it("without component", () => {
        const wrapper = shallow(<ProductsFilter/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", () => {
        const wrapper = shallow(<ProductsFilter {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop data", () => {
        const wrapper = mount(<ProductsFilter data={props.data}/>);
        expect(wrapper.prop('data')).toEqual([{}, {}, {}])
    })
})