import {
  CHANGE_AUTH,
  FETCH_ROOMS,
  FETCH_ROOM,
  FETCH_MESSAGES,
  UPDATE_ROOM_ID,
  POST_MESSAGE
} from './types';
import axios from 'axios';

const BASEURL = "http://localhost:8080/api"

export function authenticate(username) {
  return {
    type: CHANGE_AUTH,
    payload: username
  }
}

export function setCurrentRoomId(roomId) {
  // console.log("setting current room id to ", roomId);
  return {
    type: UPDATE_ROOM_ID,
    payload: roomId
  }
}

export function fetchRooms() {
  const request = axios.get(`${BASEURL}/rooms`)
  return {
    type: FETCH_ROOMS,
    payload: request
  }
}

export function fetchRoom(roomId) {
  const request = axios.get(`${BASEURL}/rooms/${roomId}`)
  return {
    type: FETCH_ROOM,
    payload: request
  }
}

export function fetchMessages(roomId) {
  let request = axios.get(`${BASEURL}/rooms/${roomId}/messages`)
  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}

export function addMessage(roomId, {name, message}) {
  return (dispatch) => { //<-- this is allowed via reduxThunk middleware
    // post the message to the server
    axios.post(`${BASEURL}/rooms/${roomId}/messages`, {name, message})
      .then((response) => {
        // chain a call to the fetchMessages ActionCreator again
        dispatch(fetchMessages(roomId));
        // chain a call to fet room data so the current user is added to the list
        dispatch(fetchRoom(roomId));
      })
      .catch((error) => {
        // if bad, then just catch it and throw an error, maybe.  For now
        // let's just swallow any errors

      });
  }
}
