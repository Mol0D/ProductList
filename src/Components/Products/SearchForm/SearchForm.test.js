import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchForm from './SearchForm';

describe("SearchForm", () => {

    const props = {
        filter: "some filter"
    }

    it("without component", () => {
        const wrapper = shallow(<SearchForm/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", () => {
        const wrapper = shallow(<SearchForm {...props}/>);
        expect(wrapper).toMatchSnapshot()
    })

    it("correct Prop Filter", () => {
        const wrapper = mount(<SearchForm filter={props.filter}/>);
        expect(wrapper.prop("filter")).toEqual("some filter")
    })
}) 