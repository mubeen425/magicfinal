import * as actionTypes from "./PlaneActionType";
import PlaneService from "../../services/PlaneService";

// Action creators for fetching planes
export const fetchPlanesRequest = () => ({
  type: actionTypes.FETCH_PLANES_REQUEST,
});

export const fetchPlanesSuccess = (planes) => ({
  type: actionTypes.FETCH_PLANES_SUCCESS,
  planes,
});

export const fetchPlanesFailure = (error) => ({
  type: actionTypes.FETCH_PLANES_FAILURE,
  error,
});

export const fetchPlanes = () => {
  return (dispatch) => {
    dispatch(fetchPlanesRequest());

    PlaneService.getAllPlanes()
      .then((planes) => {
        dispatch(fetchPlanesSuccess(planes));
      })
      .catch((error) => {
        console.error("Error fetching planes:", error);
        dispatch(fetchPlanesFailure(error));
      });
  };
};

// Action creators for creating a plane
export const createPlaneRequest = () => ({
  type: actionTypes.CREATE_PLANE_REQUEST,
});

export const createPlaneSuccess = (plane) => ({
  type: actionTypes.CREATE_PLANE_SUCCESS,
  plane,
});

export const createPlaneFailure = (error) => ({
  type: actionTypes.CREATE_PLANE_FAILURE,
  error,
});

export const createPlane = (planeData) => {
  return (dispatch) => {
    dispatch(createPlaneRequest());

    PlaneService.createPlane(planeData)
      .then((plane) => {
        dispatch(createPlaneSuccess(plane));
      })
      .catch((error) => {
        console.error("Error creating a plane:", error);
        dispatch(createPlaneFailure(error));
      });
  };
};
// Action creators for updating a plane
export const updatePlaneRequest = () => ({
  type: actionTypes.UPDATE_PLANE_REQUEST,
});

export const updatePlaneSuccess = (plane) => ({
  type: actionTypes.UPDATE_PLANE_SUCCESS,
  plane,
});

export const updatePlaneFailure = (error) => ({
  type: actionTypes.UPDATE_PLANE_FAILURE,
  error,
});

export const updatePlane = (id, planeData) => {
  return (dispatch) => {
    dispatch(updatePlaneRequest());

    PlaneService.updatePlane(id, planeData)
      .then((plane) => {
        dispatch(updatePlaneSuccess(plane));
      })
      .catch((error) => {
        console.error("Error updating a plane:", error);
        dispatch(updatePlaneFailure(error));
      });
  };
};

// Action creators for deleting a plane
export const deletePlaneRequest = () => ({
  type: actionTypes.DELETE_PLANE_REQUEST,
});

export const deletePlaneSuccess = (planeId) => ({
  type: actionTypes.DELETE_PLANE_SUCCESS,
  planeId,
});

export const deletePlaneFailure = (error) => ({
  type: actionTypes.DELETE_PLANE_FAILURE,
  error,
});

export const deletePlane = (planeId) => {
  return (dispatch) => {
    dispatch(deletePlaneRequest());

    PlaneService.deletePlane(planeId)
      .then(() => {
        dispatch(deletePlaneSuccess(planeId));
      })
      .catch((error) => {
        console.error("Error deleting a plane:", error);
        dispatch(deletePlaneFailure(error));
      });
  };
};
