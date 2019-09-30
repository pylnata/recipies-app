import { IAddLikeAction, IRemoveLikeAction, IItem } from "./types";

export const addLikeItem = (item: IItem): IAddLikeAction => ({
  type: "ADD_LIKE_ITEM",
  item
});

export const removeLikeItem = (id: number): IRemoveLikeAction => ({
  type: "REMOVE_LIKE_ITEM",
  id
});

