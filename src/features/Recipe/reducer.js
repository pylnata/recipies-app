import { actionTypes } from "./actions";

const initialState = {
  isLoading: false,
  data: {},
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RECIPE:
      return { ...state, isLoading: true, error: null };
    case actionTypes.GET_RECIPE_SUCCESS:
      return { ...state, isLoading: false, error: null, data: action.data };
    case actionTypes.GET_RECIPE_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
