export const actionTypes = {
  ADD_SHOP_ITEM: "ADD_SHOP_ITEM",
  REMOVE_SHOP_ITEM: "REMOVE_SHOP_ITEM",
  UPDATE_SHOP_ITEM: "UPDATE_SHOP_ITEM"
};

export const addItem = item => ({
  type: actionTypes.ADD_SHOP_ITEM,
  item
});

export const removeItem = item => ({
  type: actionTypes.REMOVE_SHOP_ITEM,
  item
});

export const updateItem = (item, amount) => ({
  type: actionTypes.UPDATE_SHOP_ITEM,
  item,
  amount
});
