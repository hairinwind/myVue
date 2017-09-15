export const LOGIN = (state, user) => {
  state.auth = true;
  state.user = user;
}

export const LOGOUT = (state) => {
  state.auth = false;
  state.user = null;
}

