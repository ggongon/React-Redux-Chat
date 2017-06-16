import {combineReducers} from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import RoomsReducer from './RoomsReducer'
import CurrentRoomReducer from './CurrentRoomReducer'
import MessagesReducer from './MessagesReducer'

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  rooms: RoomsReducer,
  currentRoom: CurrentRoomReducer,
  currentRoomId: CurrentRoomReducer,
  messages: MessagesReducer
})

export default rootReducer;
