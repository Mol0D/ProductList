import React from 'react';
import ProductItems from './ProductItems';
import {shallow, mount} from 'enzyme';

describe("ProductItems", ()=>{

    const props ={
        name: 'AAA',
        img: '/src',
        price: 15.99,
        stars: 4.5,
        link: 'www',
        brand: 'GOD'
    }

    it("without component", ()=>{
        const wrapper = shallow(<ProductItems/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("with component", () => {
        const wrapper = shallow(<ProductItems {...props}/>);
        expect(wrapper).toMatchSnapshot();
    })

    it("correct Prop Name", ()=>{
        const wrapper = mount(<ProductItems name={props.name}/>);
        expect(wrapper.prop('name')).toEqual('AAA')
    }) 
    
    it("correct Prop Brand", () =>{
        const wrapper = mount(<ProductItems brand={props.brand}/>);
        expect(wrapper.prop('brand')).toEqual('GOD')
    })
    
    it("correct Prop Price", () =>{
        const wrapper = mount(<ProductItems price={props.price}/>);
        expect(wrapper.prop('price')).toEqual(15.99)
    })
    
    it("correct Prop Stars", () =>{
        const wrapper = mount(<ProductItems stars={props.stars}/>);
        expect(wrapper.prop('stars')).toEqual(4.5)
    })
    
    it("correct Prop Img", () =>{
        const wrapper = mount(<ProductItems img={props.img}/>);
        expect(wrapper.prop('img')).toEqual('/src')
    })
    
    it("correct Prop Link", () =>{
        const wrapper = mount(<ProductItems link={props.link}/>);
        expect(wrapper.prop('link')).toEqual('www')
    })
})