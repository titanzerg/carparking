import React from 'react';
import App from './App'
import { shallow } from 'enzyme';
// import CheckInPoup from './components/CheckinPopup'



describe("render", () => {
  it('App must complete render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#btnIn')).toHaveLength(1)
  });

});

describe("event", () => {
  it('btnIn Click', () => {
    const wrapper = shallow(<App />);
    const btnIn = wrapper.find('#btnIn');
    const btnIn_clickfn = jest.fn();
    btnIn.simulate('click');
    expect(btnIn_clickfn).toHaveBeenCalledTimes(1)
  })
});