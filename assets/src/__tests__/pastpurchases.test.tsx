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

describe("Display Welcome Message Test", () => {
    test("Welcome Message Render Should Be: ‘Hello user@emailaddress.com!’", () => {
        const email = "user@emailaddress.com"; // set an email to pass through
        const wrapper = shallow(<PastPurchase/>); // render the past purchases
        wrapper.setState({userInfo: {attributes: {email: "user@emailaddress.com"}}}); // set the email in the state
        const welcome = <h3>{`Hello ${email}!`}</h3>; // put email in the heading
        expect(wrapper.contains(welcome)).toEqual(true); // check if match
    })
})

describe("Past Purchases Title Test", () => {
    test("Past Purchases Render Heading Should Be: ‘Past purchases’", () => {
        const heading = <h3>Past purchases</h3>; // define what the heading should be
        const wrapper = shallow(<PastPurchase />); // render the past purchases page 
        expect(wrapper.contains(heading)).toEqual(true); // check if heading matches
    })
})
