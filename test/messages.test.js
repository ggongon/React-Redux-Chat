import React from 'react';
import renderer from 'react-test-renderer';
import {Messages} from '../js/components/Messages';
import {shallow} from 'enzyme';

const currentRoom =  {
  name: 'Tea Chats',
  id: 0,
  users: [ 'Ryan', 'Nick' ]
}

const mock_messages = [
  {
    "name": "Ryan",
    "message": "ayyyyy"
  },
  {
    "name": "Nick",
    "message": "lmao"
  }
]

const props = {
  currentRoom,
  messages: mock_messages,
  fetchMessages: () => mock_messages
};

test("should render correctly", () => {

  const messages = renderer.create(<Messages {...props} />);
  expect(messages).toMatchSnapshot();
})

test("should render all messages for the selected room", () => {
  const messages = shallow( <Messages {...props} /> );

  expect(messages.find("li").length).toEqual(mock_messages.length);

})

test('should render a section where user can type their own messages', () => {

});

it('should dispatch an action when user enters a message', () => {

});
