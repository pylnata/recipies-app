import { Action } from "redux";

export interface IShopItem {
  id?: number;
  name: string;
  unit: string;
  amount: number;
}

export interface IPropsCustomItems {
  items: IShopItem[];
  removeCustomItem: (index: number) => void;
}

export interface ICustomAddFormProps {
  isShown: boolean;
  onAdd: (item: IShopItem) => void;
  onClose: () => void;
}

export type TShopListState = IShopItem[];

export interface IAddItemAction extends Action<"ADD_SHOP_ITEM"> {
  item: IShopItem;
}

export interface IRemoveItemAction extends Action<"REMOVE_SHOP_ITEM"> {
  item: IShopItem;
}

export interface IUpdateItemAction extends Action<"UPDATE_SHOP_ITEM"> {
  item: IShopItem;
  amount: number;
}

export type TAction = IAddItemAction | IRemoveItemAction | IUpdateItemAction;
