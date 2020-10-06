import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import { HeaderPage } from '../../components/HeaderPage';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<HeaderPage />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('should render Header correctly', () => {
    const wrapper = shallow(<HeaderPage startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();

    // expect(toJSON(wrapper)).toMatchSnapshot();
    // expect(wrapper.find('h1').length).toBe(1);
});

// test('', () => {

// });

