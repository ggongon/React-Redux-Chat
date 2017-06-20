import React, {PropTypes} from 'react';
import RoomList from './room_list'
import Room from './room';

export default (props) => {
    return (
      <div id="app" className="flex row">
        <div id="left">
          <RoomList />
        </div>
        <div id="right">
          <Room />
        </div>
      </div>
    );
}
