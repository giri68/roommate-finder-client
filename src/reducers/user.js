import {
  FIND_A_ROOM,
  FILL_A_ROOM,
  FIND_A_ROOMMATE, 
  DISPLAY_ALL_USERS
} from '../actions/user';

const initialState = {
  findARoom: 0, 
  fillAroom: 0,
  findARoommate: 0,
  profileMatches: []
};

export default function reducer(state = initialState, action) {
  if (action.type === FIND_A_ROOM) {
      return Object.assign({}, state, {
          findARoom: 1
      });
  } else if (action.type === FILL_A_ROOM) {
      return Object.assign({}, state, {
          fillARoom: 1
      });
  } else if (action.type === FIND_A_ROOMMATE) {
      return Object.assign({}, state, {
          findARoommate: 1
      });
  } else if (action.type === DISPLAY_ALL_USERS) {
      return Object.assign({}, state, {
          profileMatch: action.users
      }); 
  }
  return state;
}
