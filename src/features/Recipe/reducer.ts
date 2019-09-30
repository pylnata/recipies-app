import { Reducer } from "redux";

import { IRecipeState, TAction } from "./types";

const initialState: IRecipeState = {
  isLoading: false,
  data: null,
  error: null
};

const reducer: Reducer<IRecipeState, TAction> = (
  state = initialState,
  action
): IRecipeState => {
  switch (action.type) {
    case "GET_RECIPE":
      return { ...state, isLoading: true, error: null };
    case "GET_RECIPE_SUCCESS":
      return { ...state, isLoading: false, error: null, data: action.data };
    case "GET_RECIPE_FAIL":
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
