import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import RoomInfo from './room_info';
import Messages from './messages';
import AddMessage from './add_message';


export class Room extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex col">
        <RoomInfo currentRoom={this.props.currentRoom}/>
        <Messages />
        <AddMessage />
      </div>
    );
  }
}

function mapStateToProps({currentRoom}) {
  return {currentRoom}
}
export default connect(mapStateToProps)(Room);
