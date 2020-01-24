import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import App from "./App";

const store = configureStore()({});
const wrapper = shallow(<App store={store} />);

it("will render ", () => expect(wrapper.find(".bg-app").length).toEqual(1));
