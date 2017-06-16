import React, {PropTypes} from 'react';

/**
 * sample response:
 * const currentRoom =  {
     name: 'Tea Chats',
     id: 0,
     users: [ 'Ryan', 'Nick' ]
   }
 */

const RoomInfo = ({currentRoom}) => {

  if (!Object.keys(currentRoom).length) return <div>get a room</div>
  let users = currentRoom.users.join(", ");
  return (
    <div className="roomInfo center">
      <h2>{currentRoom.name}</h2>
      <h5>{users}</h5>
    </div>
  );
}

// RoomInfo.propTypes = {
//   currentRoom: PropTypes.object,
// }


export default RoomInfo;
