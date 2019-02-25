import React from 'react';
import frmIn from './frmIn'
import { shallow } from 'enzyme';

const props = {
    open: true,
  }

describe("render", () => {
  it('frmIn must complete render', () => {
    const wrapper = shallow(<frmIn {...props} />);
    // expect(wrapper.find('#frmIn')).toHaveLength(1)
    // expect(wrapper.find('#txtRe')).toHaveLength(1)
    // expect(wrapper.find('#txtRfid')).toHaveLength(1)
    // expect(wrapper.find('#btnSubmit')).toHaveLength(1)
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