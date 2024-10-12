import { signInWithPopup } from "firebase/auth";
import { auth, Provider } from "../../firebase";
import * as actions from "./action";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, Provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}
