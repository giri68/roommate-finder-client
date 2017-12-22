import {
  DISPLAY_ALL_USERS,
  displayAllUsers,
  SET_LOOKING_FOR,
  setLookingFor,
  UPDATE_CURRENT_USER,
  updateCurrentUser,
  SET_SELECTED_USER,
  setSelectedUser,
  SET_SELECTED_USER_MATCH,
  setSelectedUserMatch,
  SET_REDIRECT_DISPLAY_FALSE,
  setRedirectDisplayFalse,
  SET_CURRENT_CHAT,
  setCurrentChat,
  SAVE_LAT_LONG,
  saveLatLong
} from './user';

describe('displayAllUser', () => {
  it('Should return the action', () => {
    const users = {username: 'giri'};
    const action = displayAllUsers(users);
    expect(action.type).toEqual('DISPLAY_ALL_USERS');
    expect(action.users).toEqual(users);
  });
});

describe('setLookingFor', () => {
  it('Should return the action', () => {
    const looking_for = 'fill_a_room';
    const action = setLookingFor(looking_for);
    expect(action.type).toEqual('SET_LOOKING_FOR');
    expect(action.looking_for).toEqual(looking_for);
  });
});

describe('updateCurrentUser', () => {
  it('Should return the action', () => {
    const currentUser = {username: 'giri'};
    const action = updateCurrentUser(currentUser);
    expect(action.type).toEqual('UPDATE_CURRENT_USER');
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe('setSelectedUser', () => {
  it('Should return the action', () => {
    const user = {username: 'giri'};
    const action = setSelectedUser(user);
    expect(action.type).toEqual('SET_SELECTED_USER');
    expect(action.user).toEqual(user);
  });
});

describe('setSelectedUserMatch', () => {
  it('Should return the action', () => {
    const match = {username: 'giri'};
    const action = setSelectedUserMatch(match);
    expect(action.type).toEqual('SET_SELECTED_USER_MATCH');
    expect(action.match).toEqual(match);
  });
});

describe('setRedirectDisplayFalse', () => {
  it('Should return the action', () => {
    const user = {username: 'giri'};
    const action = setRedirectDisplayFalse(user);
    expect(action.type).toEqual('SET_REDIRECT_DISPLAY_FALSE');
    
  });
});

describe('setCurrentChat', () => {
  it('Should return the action', () => {
    const currentChat = 'hi';
    const action = setCurrentChat(currentChat);
    expect(action.type).toEqual('SET_CURRENT_CHAT');
    expect(action.currentChat).toEqual(currentChat);
  });
});

describe('saveLatLong', () => {
  it('Should return the action', () => {
    const latLong = 'hi';
    const action = saveLatLong(latLong);
    expect(action.type).toEqual('SAVE_LAT_LONG');
    expect(action.latLong).toEqual(latLong);
  });
});
