import React from 'react';
import FilterProducts from './FilterProducts';
import {shallow, mount} from 'enzyme';

describe("FilterProducts", ()=>{
    const props = {
        data: [{}, {}, {}]
    }

    it("without component", () =>{
        const wrapper = shallow(<FilterProducts/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", () =>{
        const wrapper = shallow(<FilterProducts {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop data", () =>{
        const wrapper = mount(<FilterProducts data={props.data}/>);
        expect(wrapper.prop('data')).toEqual([{}, {}, {}])
    })
})