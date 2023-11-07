import * as actionTypes from "../actions/PlaneActionType";

const initialState = {
  planes: [],
  loading: false,
  error: null,
};

const planeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLANES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_PLANES_SUCCESS:
      return {
        ...state,
        planes: action.planes,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_PLANES_FAILURE:
      return {
        ...state,
        planes: [],
        loading: false,
        error: action.error,
      };
    case actionTypes.CREATE_PLANE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_PLANE_SUCCESS:
      return {
        ...state,
        planes: [...state.planes, action.plane],
        loading: false,
        error: null,
      };
    case actionTypes.CREATE_PLANE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.UPDATE_PLANE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.UPDATE_PLANE_SUCCESS:
      const updatedPlanes = state.planes.map((plane) =>
        plane.id === action.updatedPlane.id ? action.updatedPlane : plane
      );
      return {
        ...state,
        planes: updatedPlanes,
        loading: false,
        error: null,
      };
    case actionTypes.UPDATE_PLANE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.DELETE_PLANE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.DELETE_PLANE_SUCCESS:
      const filteredPlanes = state.planes.filter(
        (plane) => plane.id !== action.deletedPlaneId
      );
      return {
        ...state,
        planes: filteredPlanes,
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_PLANE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default planeReducer;
