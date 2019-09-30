import { Reducer } from "redux";
import { TAction, IRecipeListState } from "./types";

const initialState: IRecipeListState = {
  isLoading: false,
  data: { totalResults: 0 },
  error: null
};

const reducer: Reducer<IRecipeListState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, error: null, isLoading: true };
    case "SEARCH_SUCCESS":
      return { ...state, error: null, isLoading: false, data: action.data };
    case "SEARCH_FAIL":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
