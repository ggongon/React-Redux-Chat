import {
  FETCH_ROOM
} from '../actions/types';

export default function(state={}, action) {

  switch(action.type) {
    case FETCH_ROOM:
      console.log("fetch_room, action:", action.payload)

      return action.payload.data;
  }

  return state;
}
