import { search, searchSuccess, searchFail, actionTypes } from "./actions";

describe("RecipeList actions", () => {
  it("should create an action to search recipes", () => {
    const query = "bread";
    const offset = 7;
    const expectedAction = {
      type: actionTypes.SEARCH,
      query,
      offset
    };
    expect(search(query, offset)).toEqual(expectedAction);
  });

  it("should create an action searchSuccess ", () => {
    const data = [{ id: 1, title: "bread" }, { id: 2, title: "soup" }];
    const expectedAction = {
      type: actionTypes.SEARCH_SUCCESS,
      data
    };
    expect(searchSuccess(data)).toEqual(expectedAction);
  });

  it("should create an action searchFail", () => {
    const error = new Error("something is wrong");
    const expectedAction = {
      type: actionTypes.SEARCH_FAIL,
      error
    };
    expect(searchFail(error)).toEqual(expectedAction);
  });
});
