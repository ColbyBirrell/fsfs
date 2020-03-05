import axios from "axios";

const initialState = {
  user: {},
  loading: false,
  error: false,
  errorMessage: ""
};

const CHECK_USER = "CHECK_USER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const REGISTER = "REGISTER";
const CLEAR_REDUCER = "CLEAR_REDUCER";

export function checkUser() {
  let action = {
    type: CHECK_USER,
    payload: axios.get(`/auth/user`)
  };

  return action;
}

export function register(email_address, password) {
  let action = {
    type: REGISTER,
    payload: axios.post(`/auth/register`, { email_address, password })
  };

  return action;
}

export function login(email_address, password) {
  let action = {
    type: LOGIN,
    payload: axios.post(`/auth/login`, { email_address, password })
  };

  return action;
}

export function logout() {
  let action = {
    type: LOGOUT,
    payload: axios.post(`/auth/logout`)
  };

  return action;
}

export function clearReducer() {
  let action = {
    type: CLEAR_REDUCER
  };

  return action;
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_USER + "_PENDING":
      return { ...state, loading: true, error: false };
    case CHECK_USER + "_FULFILLED":
      return { ...state, user: action.payload.data, loading: false };
    case CHECK_USER + "_REJECTED":
      console.log("CHECK_USER REJECTED:", action.payload);
      return { ...state, ...initialState };
    case LOGIN + "_PENDING":
      return { ...state, loading: true, error: false };
    case LOGIN + "_FULFILLED":
      return { ...state, user: action.payload.data, loading: false };
    case LOGIN + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data
      };
    case REGISTER + "_PENDING":
      return { ...state, loading: true, error: false };
    case REGISTER + "_FULFILLED":
      return { ...state, user: action.payload.data, loading: false };
    case REGISTER + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data
      };
    case LOGOUT + "_PENDING":
      return { ...state, loading: true };
    case LOGOUT + "_FULFILLED":
      return { ...initialState, error: false };
    case LOGOUT + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload.response.data
      };
    case CLEAR_REDUCER:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
