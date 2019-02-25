import React from 'react';
import FrmIn from './FrmIn'
import { shallow } from 'enzyme';

const props = {
    open: true,
  }

describe("render", () => {
  it('frmIn must complete render', () => {
    const wrapper = shallow(<FrmIn {...props} />);
    expect(wrapper.find('#checkinPopup')).toHaveLength(1)
    expect(wrapper.find('#inputCarNumber')).toHaveLength(1)
    expect(wrapper.find('#inputRFID')).toHaveLength(1)
    expect(wrapper.find('#btnSubmitCheckin')).toHaveLength(1)
  });

});

// describe("event", () => {
//   it('btnIn Click', () => {
//     const wrapper = shallow(<App />);
//     const btnIn = wrapper.find('#btnIn');
//     wrapper.instance().btnIn_clickfn = jest.fn();
//     btnIn.simulate('click');
//     expect(wrapper.instance().btnIn_clickfn).toHaveBeenCalledTimes(1)
//   })
// });

// describe("method", ()=> {
//   it('btnIn_clickfn must change state for open dialog',()=>{
//     const wrapper = shallow(<App />);
//     wrapper.instance().btnIn_clickfn();
//     expect(wrapper.state('frmIn_visible')).toBe(true)
//   });
// });