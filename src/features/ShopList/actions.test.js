import { addItem, removeItem, updateItem, actionTypes } from "./actions";

describe("ShopList actions", () => {
  it("should create an action to add item to Shop List", () => {
    const item = {id: 1, amount: 2, unit: 'kg', name: 'oil'};
    const expectedAction = {
      type: actionTypes.ADD_SHOP_ITEM,
      item
    };
    expect(addItem(item)).toEqual(expectedAction);
  });

  it("should create an actiin to remove item from Shop List ", () => {
    const item = {id: 1, amount: 2, unit: 'kg', name: 'oil'};
    const expectedAction = {
      type: actionTypes.REMOVE_SHOP_ITEM,
      item
    };
    expect(removeItem(item)).toEqual(expectedAction);
  });

  it("should create an action to update Shop List item", () => {
    const item = {id: 1, amount: 1, unit: 'kg', name: 'oil'};
    const amount = 10;
    const expectedAction = {
      type: actionTypes.UPDATE_SHOP_ITEM,
      item,
      amount
    };
    expect(updateItem(item, amount)).toEqual(expectedAction);
  });
});
