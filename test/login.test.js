import React from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme'; // for testing actual component content
import sinon from 'sinon';
import {Login} from '../js/components/login';

test("should render a component", () => {
  const login = renderer.create(<Login />)
  expect(login).toMatchSnapshot();
})

test("should have all the expected login form elements", () => {
  let login = mount(<Login />);

  // username
  expect(login.find("[name='login']").length).toBe(1);
  // password
  expect(login.find("[name='password']").length).toBe(1);
  // login button
  expect(login.find("[name='submit']").length).toBe(1);
})

test("clicking submit should authenticate the user", () => {
  // passes login and password to action
  const spy = jest.fn();
  const props = {spy};
  const login = mount(<Login {...props} />);

  login.find('button').simulate('click');
  // action should update the state.authenticated to true
  expect(spy).toHaveBeenCalled();
})
