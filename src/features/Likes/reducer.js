import { actionTypes } from "./actions";

const initialState = [];

const addItem = (state, action) => {
  const existsItemIndex = state.findIndex(
    item => item.id === action.item.id
  );
  if (existsItemIndex !== -1) {
    return state;
  } else {
    return [...state, action.item];
  }
};

const removeItem = (state, action) => {
  return state.filter(
    item => !(item.id === action.id)
  );
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LIKE_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_LIKE_ITEM:
      return removeItem(state, action);
    default:
      return state;
  }
};
