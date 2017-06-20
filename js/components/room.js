import React, {Component} from 'react';
import {connect} from 'react-redux';
import RoomInfo from './room_info';
import Messages from './messages';
import AddMessage from './add_message';

export class Room extends Component {
  render() {
    if (this.props.currentRoomId === null) {
      return <div className="flex stretchy absCenter">Choose a room.</div>
    }
    return (
      <div ref="room" className="flex col">
        <RoomInfo />
        <Messages />
        <AddMessage />
      </div>
    );
  }
}

const mapStateToProps = ({currentRoomId}) => {
  return {currentRoomId}
}

export default connect(mapStateToProps)(Room);
