import { actionTypes } from "./actions";

const initialState = {
  isLoading: false,
  data: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECIPE_INIT:
      return { ...state, isLoading: true, error: null };
    case actionTypes.RECIPE_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.data };
    case actionTypes.RECIPE_FAIL:
      return { ...state, isLoading: false, error: {message: action.error.message} };
    default:
      return state;
  }
};
