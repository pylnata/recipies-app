import { actionTypes } from "./actions";

const initialState = {
  isLoading: false,
  data: {},
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
    return { ...state, error: null, isLoading: true };
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, error: null, isLoading: false, data: action.data };
    case actionTypes.SEARCH_FAIL:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
