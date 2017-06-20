import {
  UPDATE_ROOM_ID
} from '../actions/types';

export default function(state=null, action) {

  switch(action.type) {
      case UPDATE_ROOM_ID:
      return action.payload
  }

  return state;
}
