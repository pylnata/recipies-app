import { IData, ISearchAction, ISearchSuccessAction, ISearchFailAction } from "./types";

export const search = (query: string, offset: number = 0):ISearchAction => ({
  type: "SEARCH",
  query,
  offset
});

export const searchSuccess = (data: IData):ISearchSuccessAction => ({
  type: "SEARCH_SUCCESS",
  data
});

export const searchFail = (error: {message: string}):ISearchFailAction => ({
  type: "SEARCH_FAIL",
  error
});
