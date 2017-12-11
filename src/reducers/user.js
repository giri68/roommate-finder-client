import {
  FIND_A_ROOM,
  FILL_A_ROOM,
  FIND_A_ROOMMATE, 
  DISPLAY_ALL_USERS,
  SET_SELECTED_USER, 
  SET_REDIRECT_DISPLAY_FALSE
} from '../actions/user';

const initialState = {
  findARoom: 0, 
  fillAroom: 0,
  findARoommate: 0,
  profileMatches: [], 
  selectedUser: null, 
  redirectDisplayed: false
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
          profileMatches: action.users
      }); 
  } else if (action.type === SET_SELECTED_USER) {
      return Object.assign({}, state, {
          selectedUser: action.user, 
          redirectDisplayed: true
      })
  } else if (action.type === SET_REDIRECT_DISPLAY_FALSE) {
      return Object.assign({}, state, {
        redirectDisplayed: false
      })
  }
  return state;
}
