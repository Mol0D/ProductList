import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';
import {shallow, mount} from 'enzyme';

it("without component", () => {
    const wrapper = shallow(<Item/>);
    expect(wrapper).toMatchSnapshot();
})

it("with component", () =>{
    const props ={
        name: 'AAA',
        img: '/src',
        price: 15.99,
        stars: 4.5,
        link: 'www',
        brand: 'GOD'
    }, 
    wrapper = shallow(<Item {...props}/>);
    expect (wrapper).toMatchSnapshot()
})

it("correct Prop Name", ()=>{
    const wrapper = mount(<Item name="AAA"/>);
    expect(wrapper.prop('name')).toEqual('AAA')
}) 

it("correct Prop Brand", () =>{
    const wrapper = mount(<Item brand="GOD"/>);
    expect(wrapper.prop('brand')).toEqual('GOD')
})

it("correct Prop Price", () =>{
    const wrapper = mount(<Item price={15.99}/>);
    expect(wrapper.prop('price')).toEqual(15.99)
})

it("correct Prop Stars", () =>{
    const wrapper = mount(<Item stars={4.5}/>);
    expect(wrapper.prop('stars')).toEqual(4.5)
})

it("correct Prop Img", () =>{
    const wrapper = mount(<Item img='/src'/>);
    expect(wrapper.prop('img')).toEqual('/src')
})

it("correct Prop Link", () =>{
    const wrapper = mount(<Item link='www'/>);
    expect(wrapper.prop('link')).toEqual('www')
})
