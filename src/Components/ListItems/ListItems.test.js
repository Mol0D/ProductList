import React from 'react';
import ListItems from './ListItems';
import {shallow, mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';


describe("ListItems", ()=>{
    
    const props = {
        listMenu: ['aaa', 'bbb', 'ccc']
    }

    it("without component", ()=>{
        const wrapper = shallow(<ListItems/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", ()=>{
        const wrapper = shallow(<ListItems {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop", ()=>{
        const wrapper = mount(
            <BrowserRouter listMenu={props.listMenu}>
                <ListItems/>)
            </BrowserRouter>
        );
        expect(wrapper.prop('listMenu')).toEqual(['aaa', 'bbb', 'ccc'])
    })

    
})