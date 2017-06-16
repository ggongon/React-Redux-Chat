import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class RoomList extends React.Component {

  constructor(props) {
    super(props);
    this.renderRooms = this.renderRooms.bind(this);
    this.onRoomClicked = this.onRoomClicked.bind(this);
  }

  componentWillMount() {
    this.props.fetchRooms();
  }

  onRoomClicked(roomId) {
    this.props.spy && this.props.spy();
    if (roomId !== this.props.currentRoomId) {
      this.props.setCurrentRoomId(roomId);
      this.props.fetchRoom(roomId);
    }
  }

  renderRooms() {
    if (this.props.rooms) {
      return this.props.rooms.map((room) => {
        return (
          <li key={room.id} onClick={() => this.onRoomClicked(room.id) }>
            {room.name}
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderRooms(this.props.rooms)}
        </ul>
      </div>
    )
  }
}

// RoomList.PropTypes = {
//   rooms: PropTypes.array,
// }

function mapStateToProps({rooms, currentRoomId}) {
  return { rooms, currentRoomId }
}

export default connect(mapStateToProps, actions)(RoomList);
