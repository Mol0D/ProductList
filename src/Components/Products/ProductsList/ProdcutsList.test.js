import React from 'react';
import {shallow, mount} from 'enzyme';
import ProductsList from './ProductsList';

describe("ProductsList", () => {

    const props = {
        data: [{}, {}, {}],
        isLoading: true,
        filter: "some filter"
    }

    it("without component", () => {
        const wrapper = shallow(<ProductsList/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", () => {
        const wrapper = shallow(<ProductsList {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop Data", () => {
        const wrapper = mount(<ProductsList data={props.data}/>);
        expect(wrapper.prop('data')).toEqual([{}, {}, {}])
    })

    it("correct Prop isLoading", () => {
        const wrapper = mount(<ProductsList isLoading={props.isLoading}/>);
        expect(wrapper.prop('isLoading')).toEqual(true)
    })

    it("correct Prop Filter", () => {
        const wrapper = mount(<ProductsList filter={props.filter}/>);
        expect(wrapper.prop("filter")).toEqual("some filter")
    })

})