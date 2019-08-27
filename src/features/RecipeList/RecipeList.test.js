import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { RecipeList } from "./RecipeList";
import { results } from "../../service/data";
import RecipeItem from "./RecipeItem/RecipeItem";
import * as SearchContext from "../../contexts/SearchContext";
import Paging from "./Paging";

configure({ adapter: new Adapter() });

describe("RecipeList", () => {
  let wrapper;
  let useEffect;
  let props;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    props = {
      search: jest.fn().mockImplementation(() => {}),
      data: { results: [], totalResults: 0, offset: 0 }
    };

    // mock for context
    const contextValues = { query: "pizza" };
    jest
      .spyOn(SearchContext, "useSearchContext")
      .mockImplementation(() => contextValues);

    wrapper = shallow(<RecipeList {...props} />);
  });

  describe("on start", () => {
    it("calls search from props", () => {
      expect(props.search).toHaveBeenCalled();
    });
  });

  it("should render RecipeItem components if data.results is not empty", () => {
    wrapper.setProps({ data: results[0] });
    expect(wrapper.find(RecipeItem)).toHaveLength(7);
  });

  it("should render Page component if data.results is not empty", () => {
    wrapper.setProps({ data: results[0] });
    expect(wrapper.find(Paging)).toHaveLength(1);
  });
});
