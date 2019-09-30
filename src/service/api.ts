import axios from "../axios-recipies";
import { COUNT_RECIPIES_ON_PAGE } from "../config";
import * as fakeData from "./data";

window.localStorage.removeItem("use_fake_data"); // intially

export const alwaysUseFakeNow = () => {
  window.localStorage.setItem("use_fake_data", "true");
};

export const getSearchResults = (
  query: string,
  offset: number = 0,
  useFakeData: boolean = false
) => {
  if (useFakeData || window.localStorage.getItem("use_fake_data")) {
    alwaysUseFakeNow();
    return new Promise(function(resolve) {
      setTimeout(() => resolve({ data: fakeData.results[offset] }), 300);
    });
  } else {
    return axios.get("/recipes/search", {
      params: { offset, query, number: COUNT_RECIPIES_ON_PAGE }
    });
  }
};

export const getRecipe = (id: number, useFakeData = false) => {
  if (useFakeData || window.localStorage.getItem("use_fake_data")) {
    alwaysUseFakeNow();

    if (fakeData.recipies[id]) {
      return new Promise(function(resolve) {
        setTimeout(() => resolve({ data: fakeData.recipies[id as number] }), 500);
      });
    } else {
      return Promise.reject(
        new Error(
          "There is no data for this recipe in fake DB. Try later when API works or choose recipe from first page at left."
        )
      );
    }
  } else return axios.get(`/recipes/${id}/information`);
};
