import React from 'react';
import renderer from 'react-test-renderer';
import {mount,shallow} from 'enzyme';
import {Room} from '../js/components/room';

test('Room component should render', () => {
  let room = shallow(<Room />);
  expect(room.nodes[0].ref).toEqual("room");
});
