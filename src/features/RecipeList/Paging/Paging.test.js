import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Paging from "./Paging";

configure({ adapter: new Adapter() });

describe("<Paging />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Paging pageChangedHandler={() => {}} />);
  });

  it("should render  Previous Page <i /> with class no-active if offset === 0 ", () => {
    wrapper.setProps({ offset: 0, totalResults: 33, cntOnPage: 7 });
    const expected = /title="Previous page".+page--noactive.+[^>]+>/;
    expect(wrapper.html()).toEqual(expect.stringMatching(expected));
    //expect(wrapper.html()).toContain('page--noactive');
  });

  it("should render  Next Page <i /> with class no-active if (offset <= totalResults - cntOnPage) ", () => {
    wrapper.setProps({ offset: 28, totalResults: 33, cntOnPage: 7 });
    const expected = /title="Next page".+page--noactive.+[^>]+>/;
    expect(wrapper.html()).toEqual(expect.stringMatching(expected));
  });
});
