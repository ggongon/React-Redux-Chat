import React from 'react';
import renderer from 'react-test-renderer'; //for snapshot testing only
import {mount} from 'enzyme'; // for testing actual component content
import {RoomList} from '../js/components/room_list';

let props;
const rooms = [
  // {
  //   "name": "Tea Chats",
  //   "id": 0
  // },
  {
    "name": "Coffee Chats",
    "id": 1
  }
];

beforeEach(() => {
  props = {
    fetchRooms: () => rooms,
    setCurrentRoomId: () => { /* sets the current room id */ },
    fetchRoom: () => { /* fetch current room data via Redux */ },
    fetchMessages: () => { /* fetch messages from Redux */}
  }
});

test('renders correctly', () => {

  const roomList = renderer.create(
      <RoomList {...props} />
  ).toJSON();

  expect(roomList).toMatchSnapshot();
});

test ('roomList should render a list of rooms',() => {
  //here we assume that rooms is a prop.  In real application execution,
  // fetchRooms returns a list of rooms via redux and returns it as props to
  // RoomList
  const roomList = mount(
      <RoomList {...props} rooms={rooms} />
  );

  expect(roomList.find('li').length).toEqual(1);

});

test('clicking on a room should fetch current room data', () => {
  const spy = jest.fn(() => {
    // console.log("CLICKITY CLICK")
  });
  const roomList = mount(
      <RoomList {...props} rooms={rooms} spy={spy} />
  );

  roomList.find('li').simulate('click');

  expect(spy).toHaveBeenCalled();
})
