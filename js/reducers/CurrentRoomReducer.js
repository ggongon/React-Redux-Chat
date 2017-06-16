import {
  FETCH_ROOM, UPDATE_ROOM_ID
} from '../actions/types';

export default function(state={}, action) {

  switch(action.type) {
    case FETCH_ROOM:
      return action.payload.data;
    case UPDATE_ROOM_ID:
      return action.payload
  }

  return state;
}
