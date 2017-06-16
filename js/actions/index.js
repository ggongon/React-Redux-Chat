import {CHANGE_AUTH, FETCH_ROOMS, FETCH_ROOM, FETCH_MESSAGES, UPDATE_ROOM_ID} from './types';
import axios from 'axios';

const BASEURL = "http://localhost:8080/api"
export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}

export function setCurrentRoomId(roomId) {
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
  const request = axios.get(`${BASEURL}/rooms/${roomId}/messages`)
  return {
    type: FETCH_MESSAGES,
    payload: request
  }
}
