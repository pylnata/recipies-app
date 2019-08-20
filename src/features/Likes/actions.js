export const actionTypes = {
  ADD_LIKE_ITEM: "ADD_LIKE_ITEM",
  REMOVE_LIKE_ITEM: "REMOVE_LIKE_ITEM"
};

export const addLikeItem = item => ({
  type: actionTypes.ADD_LIKE_ITEM,
  item
});

export const removeLikeItem = id => ({
  type: actionTypes.REMOVE_LIKE_ITEM,
  id
});

