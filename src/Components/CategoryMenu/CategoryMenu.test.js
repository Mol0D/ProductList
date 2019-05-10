import React from 'react';
import {shallow, mount} from 'enzyme';
import CategoryMenu from './CategoryMenu';
import {BrowserRouter} from 'react-router-dom';


describe("CategoryMenu", ()=>{
    
    const props = {
        listMenu: ['aaa', 'bbb', 'ccc']
    }

    it("without component", ()=>{
        const wrapper = shallow(<CategoryMenu/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", ()=>{
        const wrapper = shallow(<CategoryMenu {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop", ()=>{
        const wrapper = mount(
            <BrowserRouter listMenu={props.listMenu}>
                <CategoryMenu/>)
            </BrowserRouter>
        );
        expect(wrapper.prop('listMenu')).toEqual(['aaa', 'bbb', 'ccc'])
    })

    
})