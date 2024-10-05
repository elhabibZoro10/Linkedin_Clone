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
