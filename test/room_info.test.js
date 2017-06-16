import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import RoomInfo from '../js/components/room_info';

const currentRoom =  {
  name: 'Tea Chats',
  id: 0,
  users: [ 'Ryan', 'Nick' ]
}

it('should render properly', () => {
  const roominfo = renderer.create(<RoomInfo currentRoom={currentRoom} />)
  expect(roominfo).toMatchSnapshot();
});
