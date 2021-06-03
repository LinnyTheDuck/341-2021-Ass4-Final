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

