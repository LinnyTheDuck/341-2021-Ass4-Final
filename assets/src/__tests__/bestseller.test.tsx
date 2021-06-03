import React from 'react';
//import ReactDOM from 'react-dom';
//import render from  '../modules/bestSellers/BestSellers';//"@testing-library/react";
//import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Bestseller from '../modules/bestSellers/BestSellers';
//import Adapter from 'enzyme-adapter-react-16';

//Enzyme.configure({ adapter: new Adapter() })

it("Renders Without Crashing", () => {
    shallow(<Bestseller />);
  });

describe("Bestseller Title Test", () => {
    test("BestSellers Render Heading Should Be: ‘Top 20 best sellers’", () => {
        const heading = <h3>Top 20 best sellers</h3>; // define what the heading should be
        const wrapper = shallow(<Bestseller />); // rendr the bestseller page
        expect(wrapper.contains(heading)).toEqual(true); // check if heading matches
    })
})