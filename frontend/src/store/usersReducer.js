import csrfFetch from "./csrf";

// ACTION TYPES
const RECEIVE_USER = "users/RECEIVE_USER";
const REMOVE_USER = "users/REMOVE_USER";
const SET_USERS = 'users/setUsers';

// ACTION CREATORS
export const receiveUser = (user) => ({
	type: RECEIVE_USER,
	payload: user,
});

export const removeUser = (userId) => ({
	type: REMOVE_USER,
	userId, // userId: userId
});

export const setUsers = (users) => {
	return {
	  type: SET_USERS,
	  payload: users,
	};
  };

// THUNK ACTION CREATORS
export const loginUser = (user) => async (dispatch) => {
	debugger
	let res = await csrfFetch("/api/session", {
		method: "POST",
		body: JSON.stringify(user),
	});
	let data = await res.json();
	sessionStorage.setItem("currentUser", JSON.stringify(data.user));
	debugger;
	dispatch(receiveUser(data.user));
};

export const logoutUser = (userId) => async (dispatch) => {
	let res = await csrfFetch("/api/session", {
		method: "DELETE",
	});
	sessionStorage.setItem("currentUser", null);
        debugger
	dispatch(removeUser(userId));
};

export const createUser = (user) => async (dispatch) => {
	let res = await csrfFetch("/api/users", {
		method: "POST",
		body: JSON.stringify(user),
	});
	let data = await res.json();
	sessionStorage.setItem("currentUser", JSON.stringify(data.user));
	dispatch(receiveUser(data.user));
};

// REDUCER
const userReducer = (state = {}, action) => {
	const nextState = { ...state };
  
	switch (action.type) {
	  case RECEIVE_USER:
		nextState[action.payload.id] = action.payload;
		return nextState;
	  case REMOVE_USER:
		delete nextState[action.userId];
		return nextState;
	  case SET_USERS:
		action.payload.forEach(user => {
		  nextState[user.id] = user;
		});
		return nextState;
	  default:
		return state;
	}
  };  

export default userReducer;