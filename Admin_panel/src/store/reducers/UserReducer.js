import * as actionTypes from "../actions/UserActionType";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
