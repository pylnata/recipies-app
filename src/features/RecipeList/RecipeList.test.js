import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";

import { results } from "../../service/data";
import * as SearchContext from "../../contexts/SearchContext";
import * as ReactReduxHooks from "../../hooks/react-redux";
import { RecipeList } from "./RecipeList";
import RecipeItem from "./RecipeItem/RecipeItem";
import Paging from "./Paging/Paging";

configure({ adapter: new Adapter() });

describe("RecipeList", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    store = configureStore()({
      data: results[0],
      isLoading: false,
      error: null
    });

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    const contextValues = { query: "soup" };
    jest
      .spyOn(SearchContext, "useSearchContext")
      .mockImplementation(() => contextValues);

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation(state => store.getState());

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(<RecipeList store={store} />);
  });

  describe("on start", () => {
    it("dispatch search action to store", () => {
      const actions = store.getActions();
      expect(actions).toEqual([{ type: "SEARCH", query: "soup", offset: 0 }]);
    });
  });

  it("should render RecipeItem components if data.results is not empty", () => {
    expect(wrapper.find(RecipeItem)).toHaveLength(7);
  });

  it("should render Paging component if data.results is not empty", () => {
    expect(wrapper.find(Paging)).toHaveLength(1);
  });
});
