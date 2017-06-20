import {combineReducers} from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import RoomsReducer from './RoomsReducer'
import CurrentRoomReducer from './CurrentRoomReducer'
import CurrentRoomIdReducer from './CurrentRoomIdReducer'
import MessagesReducer from './MessagesReducer'

const rootReducer = combineReducers({
  username: AuthenticationReducer,
  rooms: RoomsReducer,
  currentRoom: CurrentRoomReducer,
  currentRoomId: CurrentRoomIdReducer,
  messages: MessagesReducer
})

export default rootReducer;
