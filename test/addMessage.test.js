import React from 'react';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';
import {AddMessage} from '../js/components/add_message';

let props = {
  addMessage: (msg) => { /* submit to redux action */ }
}
test('should render a section where we can add our own Messages', () => {
  const component = renderer.create(<AddMessage {...props} />);
  expect(component).toMatchSnapshot();
});

test('should trigger the onSubmit method when hitting enter', () => {
  const spy = jest.fn();
  const component = mount(<AddMessage {...props} spy={spy} />);

  component.find("input").simulate('keyPress', {key: "Enter", keyCode: 13, which: 13});
  expect(spy).toHaveBeenCalled();
});

test('should trigger the onSubmit method when clicking the submit button', () => {
  const spy = jest.fn();
  const component = mount(<AddMessage {...props} spy={spy} />);

  component.find("form").simulate("submit");
  expect(spy).toHaveBeenCalled();
});
