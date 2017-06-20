import React, {Component} from 'react';
import {connect} from 'react-redux';
/**
 * sample response:
 * const currentRoom =  {
     name: 'Tea Chats',
     id: 0,
     users: [ 'Ryan', 'Nick' ]
   }
 */

export class RoomInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentRoom = this.props.currentRoom;

    if (!Object.keys(currentRoom).length) return <div>get a room</div>
    let users = currentRoom.users.join(", ");
    return (
      <div className="roomInfo center">
        <h2>{currentRoom.name}</h2>
        <h5>{users}</h5>
      </div>
    );
  }
}

const mapStateToProps = ({currentRoom}) => {
  return {currentRoom}
};

export default connect(mapStateToProps)(RoomInfo);
