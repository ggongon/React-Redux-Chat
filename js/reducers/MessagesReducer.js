import {
  FETCH_MESSAGES
} from '../actions/types';

export default function(state=[], action) {

  switch(action.type) {
    case FETCH_MESSAGES:
    console.log("called fetch messages reducer", action.payload.data)
      return action.payload.data;
  }
  return state;
}
