import { LOGIN, LOGOUT } from "./types";
export default function reducer(state, { type, payload }) {
  switch (type) {
    case LOGIN: {
      return { ...state, token: payload, isAuth: true };
    }
    case LOGOUT: {
      return { ...state, token: null, isAuth: false };
    }
    default:
      return state;
  }
}
