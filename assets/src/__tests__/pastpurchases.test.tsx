import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import PastPurchase from '../modules/pastPurchases/PastPurchases';
import Adapter from 'enzyme-adapter-react-16';
import { userInfo } from 'os';

Enzyme.configure({ adapter: new Adapter() })

it("Renders Without Crashing", () => {
    shallow(<PastPurchase />);
});

describe("Past Purchases Title Test", () => {
    test("Past Purchases Render Heading Should Be: ‘Past purchases’", () => {
        const heading = <h3>Past purchases</h3>; // define what the heading should be
        const wrapper = shallow(<PastPurchase />); // render the past purchases page 
        expect(wrapper.contains(heading)).toEqual(true); // check if heading matches
    })
})
