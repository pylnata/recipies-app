import { Action } from "redux";

export interface IIngredient {
  id: number;
  name: string;
  measures: { us: { unitShort: string; amount: number } };
}

export interface IInstructions {
  steps: Array<{ number: string; step: string }>;
}
export interface IRecipe {
  id: number;
  title: string;
  analyzedInstructions: Array<IInstructions>;
  readyInMinutes: number;
  image: string;
  preparationMinutes: number;
  servings: string;
  diets: Array<string>;
  extendedIngredients: Array<IIngredient>;
}

export interface IRecipeState {
  isLoading: boolean;
  data: IRecipe | null;
  error: { message: string } | null;
}

export interface IGetRecipeAction extends Action<"GET_RECIPE"> {
  id: number;
}

export interface IGetRecipeSuccessAction extends Action<"GET_RECIPE_SUCCESS"> {
  data: IRecipe;
}

export interface IGetRecipeFailAction extends Action<"GET_RECIPE_FAIL"> {
  error: { message: string };
}

export type TAction =
  | IGetRecipeAction
  | IGetRecipeSuccessAction
  | IGetRecipeFailAction;
