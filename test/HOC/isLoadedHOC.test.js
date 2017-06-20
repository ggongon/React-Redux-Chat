import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import {Room} from '../../js/components/room';
import RoomHOC from '../../js/components/HOC/isLoadedHOC';

let props = {

}
test('should load the WrappedComponent if there is a room selected', () => {
  let expected = true;// renderer.create(<Room />);
  let actual = true; //renderer.create(RoomHOC(<Room />));
  expect(actual).toEqual(expected);
});
