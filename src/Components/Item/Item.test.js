import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';
import {shallow, mount} from 'enzyme';

const props ={
    name: 'AAA',
    img: '/src',
    price: 15.99,
    stars: 4.5,
    link: 'www',
    brand: 'GOD'
}


describe(('Item'), () => {
    it("without component", () => {
        const wrapper = shallow(<Item/>);
        expect(wrapper).toMatchSnapshot();
    })
    
    it("with component", () =>{
        const wrapper = shallow(<Item {...props}/>);
        expect (wrapper).toMatchSnapshot()
    })
    
    it("correct Prop Name", ()=>{
        const wrapper = mount(<Item name={props.name}/>);
        expect(wrapper.prop('name')).toEqual('AAA')
    }) 
    
    it("correct Prop Brand", () =>{
        const wrapper = mount(<Item brand={props.brand}/>);
        expect(wrapper.prop('brand')).toEqual('GOD')
    })
    
    it("correct Prop Price", () =>{
        const wrapper = mount(<Item price={props.price}/>);
        expect(wrapper.prop('price')).toEqual(15.99)
    })
    
    it("correct Prop Stars", () =>{
        const wrapper = mount(<Item stars={props.stars}/>);
        expect(wrapper.prop('stars')).toEqual(4.5)
    })
    
    it("correct Prop Img", () =>{
        const wrapper = mount(<Item img={props.img}/>);
        expect(wrapper.prop('img')).toEqual('/src')
    })
    
    it("correct Prop Link", () =>{
        const wrapper = mount(<Item link={props.link}/>);
        expect(wrapper.prop('link')).toEqual('www')
    })
})

