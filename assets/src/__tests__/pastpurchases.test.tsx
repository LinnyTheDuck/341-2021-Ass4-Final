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

/// CREATING A TEST USER
const testUserAttributes = {
    email: "email@email.com"
}
const testUser = {
    id: 1234567890,
    username: "hi",
    attributes: testUserAttributes
}

describe("Order Date Test", () => {
    test("Order Date Render Heading Should 'Order date: mm/dd/yyyy hh:mm'", () => {
        const NumDate = 12345; // Create a date but as an integer
        const date = new Date(NumDate); // turn into a date (line below formats as a string)
        const day = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

        const wrapper = mount(<PastPurchase/>); // render the page

        wrapper.setState({ // create and set the orders array state (0th item in array)
            orders: [{ // purchases interface
                orderDate: NumDate, 
                orderId: "test", 
                books: [{ // order interface
                    bookId: "test", 
                    quantity: 1, 
                    price: 10
                }]
            }]
        });

        wrapper.setState({userInfo: testUser}); // set test user
        wrapper.setState({isLoading: false}); // set isloading
        
        const heading = <h4>{`Order date: ${day}`}</h4>; // define what the heading should be
        expect(wrapper.contains(heading)).toEqual(true); // check if heading matches
    })
})