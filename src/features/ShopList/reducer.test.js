import reducer from "./reducer";
import { actionTypes } from "./actions";

describe("Shop List reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle ADD_SHOP_ITEM", () => {
    expect(
      reducer([], {
        type: actionTypes.ADD_SHOP_ITEM,
        item: { id: 1, name: "milk", amount: 0.5, unit: "cup" }
      })
    ).toEqual([{ id: 1, name: "milk", amount: 0.5, unit: "cup" }]);

    expect(
      reducer([{ id: 1, name: "milk", amount: 0.5, unit: "cup" }], {
        type: actionTypes.ADD_SHOP_ITEM,
        item: { id: 1, name: "milk", amount: 0.5, unit: "cup" }
      })
    ).toEqual([{ id: 1, name: "milk", amount: 1, unit: "cup" }]);

    expect(
      reducer([{ id: 1, name: "milk", amount: 0.5, unit: "cup" }], {
        type: actionTypes.ADD_SHOP_ITEM,
        item: { id: 2, name: "tomato", amount: 1, unit: "" }
      })
    ).toEqual([
      { id: 1, name: "milk", amount: 0.5, unit: "cup" },
      { id: 2, name: "tomato", amount: 1, unit: "" }
    ]);
  });

  it("should handle REMOVE_SHOP_ITEM", () => {
    expect(
      reducer([{ id: 1, name: "milk", amount: 0.5, unit: "cup" }], {
        type: actionTypes.REMOVE_SHOP_ITEM,
        item: { id: 1, name: "milk", amount: 0.5, unit: "cup" }
      })
    ).toEqual([]);
  });

  it("should handle UPDATE_SHOP_ITEM", () => {
    expect(
      reducer([{ id: 1, name: "milk", amount: 0.5, unit: "cup" }], {
        type: actionTypes.UPDATE_SHOP_ITEM,
        item: { id: 1, name: "milk", unit: "cup", amount: 0.5 },
        amount: 10
      })
    ).toEqual([{ id: 1, name: "milk", amount: 10, unit: "cup" }]);
  });
});
