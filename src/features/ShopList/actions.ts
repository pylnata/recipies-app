import { IShopItem, IAddItemAction, IRemoveItemAction, IUpdateItemAction } from "./types";

export const addItem = (item: IShopItem):IAddItemAction => ({
  type: "ADD_SHOP_ITEM",
  item
});

export const removeItem = (item: IShopItem):IRemoveItemAction => ({
  type: "REMOVE_SHOP_ITEM",
  item
});

export const updateItem = (item: IShopItem, amount: number):IUpdateItemAction => ({
  type: "UPDATE_SHOP_ITEM",
  item,
  amount
});
