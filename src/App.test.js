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
    wrapper.instance().btnIn_clickfn = jest.fn();
    btnIn.simulate('click');
    expect(wrapper.instance().btnIn_clickfn).toHaveBeenCalledTimes(1)
  })
});

describe("method", ()=> {
  it('btnIn_clickfn must change state for open dialog',()=>{
    const wrapper = shallow(<App />);
    wrapper.instance().btnIn_clickfn();
    expect(wrapper.state('frmIn_visible')).toBe(true)
  });
});