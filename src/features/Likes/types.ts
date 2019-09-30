import { Action } from "redux";

export interface IItem {
  id: number;
  title: string;
}

export type TLikesState = IItem[];

export interface IAddLikeAction extends Action<"ADD_LIKE_ITEM"> {
  item: IItem;
}

export interface IRemoveLikeAction extends Action<"REMOVE_LIKE_ITEM"> {
  id: number;
}

export type TAction = IAddLikeAction | IRemoveLikeAction;
