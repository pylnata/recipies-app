import { IRecipe, IGetRecipeAction, IGetRecipeSuccessAction, IGetRecipeFailAction } from "./types";

export const getRecipe = (id: number):IGetRecipeAction => ({
  type: "GET_RECIPE",
  id
});

export const getRecipeSuccess = (data: IRecipe):IGetRecipeSuccessAction => ({
  type: "GET_RECIPE_SUCCESS",
  data
});

export const getRecipeFail = (error: { message: string}):IGetRecipeFailAction => ({
  type: "GET_RECIPE_FAIL",
  error
});

