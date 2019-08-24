import { actionTypes } from "./actions";

const initialState = [];

const addItem = (state, action) => {
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

const removeItem = (state, action) => {
  return state.filter(
    item => !(item.id === action.item.id && item.unit === action.item.unit)
  );
};

const updateItem = (state, action) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id && item.unit === action.item.unit
  );

  const newState =state.map((item, index) => {
    if (index === existsItemIndex) {
      return { ...item, amount: action.amount };
    }
    return item;
  });

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
