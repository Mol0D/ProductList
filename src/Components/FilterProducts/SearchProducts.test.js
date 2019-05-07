import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchProduct from './SearchProducts'; 

describe("SearchProducts", () =>{
    const props ={
        data: [{}, {}, {}]
    }

    it("without component", () =>{
        const wrapper = shallow(<SearchProduct/>);
        expect(wrapper).toMatchSnapshot();
    }) 

    it("with component", () =>{
        const wrapper = shallow(<SearchProduct {...props}/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop Data", () =>{
        const wrapper = mount(<SearchProduct data={props.data}/>);
        expect(wrapper.prop('data')).toEqual([{}, {}, {}])
    })
})

