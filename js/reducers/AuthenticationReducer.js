import {
  CHANGE_AUTH
} from '../actions/types';

/**
 * this reducer just sets the username in scope.  As long as there is a username,
 * this implies that the user has logged in.
 *
 * @param  {String} [state=''] the active user's name
 * @param  {[type]}  action        [description]
 * @return {[type]}                [description]
 */
export default function(state='', action) {
  switch(action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }
  return state;
}
