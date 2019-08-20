import { actionTypes } from "./actions";

const initialState = [];

const addItem = (state, action) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );
  // TODO
  if (existsItemIndex !== -1) {
    const existsItem = state[existsItemIndex];
    const newState = [...state];
    const newItem = {
      ...existsItem,
      amount: existsItem.amount + action.item.amount
    };
    newState[existsItemIndex] = newItem;
    return newState;
  } else {
    return [...state, action.item];
  }
};

const removeItem = (state, action) => {
  return state.filter(
    item => !(item.id === action.item.id && item.unit === action.item.unit)
  );
};

const updateItem = (state, action) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );
  // TODO
  const existsItem = state[existsItemIndex];
  const newState = [...state];
  const newItem = {
    ...existsItem,
    amount: action.amount
  };
  newState[existsItemIndex] = newItem;
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHOP_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_SHOP_ITEM:
      return removeItem(state, action);
    case actionTypes.UPDATE_SHOP_ITEM:
      return updateItem(state, action);
    default:
      return state;
  }
};
