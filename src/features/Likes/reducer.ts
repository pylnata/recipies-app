import {
  TAction,
  TLikesState,
  IAddLikeAction,
  IRemoveLikeAction
} from "./types";
import { Reducer } from "redux";

const initialState: TLikesState = [];

const addItem: Reducer<TLikesState, IAddLikeAction> = (
  state = initialState,
  action
) => {
  const existsItemIndex = state.findIndex(item => item.id === action.item.id);
  if (existsItemIndex !== -1) {
    return state;
  } else {
    return [...state, action.item];
  }
};

const removeItem: Reducer<TLikesState, IRemoveLikeAction> = (
  state = initialState,
  action
) => {
  return state.filter(item => !(item.id === action.id));
};

const reducer: Reducer<TLikesState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_LIKE_ITEM":
      return addItem(state, action);
    case "REMOVE_LIKE_ITEM":
      return removeItem(state, action);
    default:
      return state;
  }
};

export default reducer;
