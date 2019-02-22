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