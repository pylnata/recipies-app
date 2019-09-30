import { Action } from "redux";

export interface IPagingProps {
  offset: number;
  totalResults: number;
  pageChangedHandler: (page: string) => void;
  cntOnPage: number;
}

export interface IData {
  results?: Array<IRecipe>;
  totalResults?: number;
  offset?: number;
}

export interface IRecipe {
  id: number;
  title: string;
  readyInMinutes: number;
}

export interface ISearchSuccessAction extends Action<"SEARCH_SUCCESS"> {
  data: IData;
}

export interface ISearchAction extends Action<"SEARCH"> {
  query: string;
  offset: number;
}

export interface ISearchFailAction extends Action<"SEARCH_FAIL"> {
  error: { message: string };
}

export type TAction = ISearchSuccessAction | ISearchAction | ISearchFailAction;

export interface IRecipeListState {
  isLoading?: boolean;
  error?: { message: string } | null;
  data?: IData;
}
