import UserService from "../../services/UserService";
import * as actionTypes from "./UserActionType";

export const fetchUsersRequest = () => ({
  type: actionTypes.FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  users,
});

export const fetchUsersFailure = (error) => ({
  type: actionTypes.FETCH_USERS_FAILURE,
  error,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    UserService.getAllUsers()
      .then((users) => {
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        dispatch(fetchUsersFailure(error));
      });
  };
};
