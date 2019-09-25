import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import * as ReactReduxHooks from "../../hooks/react-redux";

import { Recipe } from "./Recipe";
import Ingredients from "./Ingredients/Ingredients";
import { recipies } from "../../service/data";

describe("Recipe", () => {
  let wrapper;
  let useEffect;
  let store;
  const recipeId = 601651;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    const props = { match: { params: { recipe_id: recipeId } } };

    store = configureStore()({
      recipe: recipies[recipeId],
      isLoading: false,
      error: null
    });

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation(() => store.getState());

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<Recipe store={store} {...props} />);
  });

  describe("on start", () => {
    it(" dispatch action getRecipe ", () => {
      const actions = store.getActions();
      expect(actions).toEqual([{ type: "GET_RECIPE", id: recipeId }]);
    });
  });

  it("should render Ingredients component if recipe is loaded", () => {
    expect(wrapper.find(Ingredients)).toHaveLength(1);
  });
});
