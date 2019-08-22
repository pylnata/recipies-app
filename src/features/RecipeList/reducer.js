import { actionTypes } from "./actions";

const initialState = {
  isLoading: false,
  data: {},
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH:
      return { ...state, isLoading: true };
    case actionTypes.SEARCH_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case actionTypes.SEARCH_FAIL:
    //console.log(action.error)
      return { ...state, isLoading: false, error: {message: action.error.message} };
    default:
      return state;
  }
};
