import { Reducer } from "redux";

import {
  TAction,
  TShopListState,
  IAddItemAction,
  IRemoveItemAction,
  IUpdateItemAction
} from "./types";

const initialState: TShopListState = [];

const addItem = (state: TShopListState, action: IAddItemAction) => {
  action.item.amount = Math.round(action.item.amount * 10) / 10;
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );

  if (existsItemIndex !== -1) {
    return state.map((item, index) => {
      if (index === existsItemIndex) {
        const amount = Math.round((item.amount + action.item.amount) * 10) / 10;
        return { ...item, amount };
      }
      return item;
    });
  } else {
    return [...state, action.item];
  }
};

const removeItem = (state: TShopListState, action: IRemoveItemAction) => {
  return state.filter(
    item => !(item.id === action.item.id && item.unit === action.item.unit)
  );
};

const updateItem = (state: TShopListState, action: IUpdateItemAction) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );
  const newState = state.map((item, index) => {
    if (index === existsItemIndex) {
      return { ...item, amount: action.amount };
    }
    return item;
  });
  return newState;
};

const reducer: Reducer<TShopListState, TAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_SHOP_ITEM":
      return addItem(state, action);
    case "REMOVE_SHOP_ITEM":
      return removeItem(state, action);
    case "UPDATE_SHOP_ITEM":
      return updateItem(state, action);
    default:
      return state;
  }
};

export default reducer;
