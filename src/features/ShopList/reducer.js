import { actionTypes } from "./actions";

const initialState = [];

const addItem = (state, action) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );

  if (existsItemIndex !== -1) {
    return state.map((item, index) => {
      if (index === existsItemIndex) {
        return { ...item, amount: item.amount + action.item.amount };
      }
      return item;
    });
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
  return state.map((item, index) => {
    if (index === existsItemIndex) {
      return { ...item, amount: action.item.amount };
    }
    return item;
  });
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
