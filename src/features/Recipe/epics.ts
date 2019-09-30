import { Observable, from } from "rxjs";
import "rxjs/add/observable/of";
import { ofType } from "redux-observable";

import { catchError, switchMap, map } from "rxjs/operators";

import * as api from "../../service/api";

import { getRecipeSuccess, getRecipeFail } from "./actions";
import { IGetRecipeAction } from "./types";

export const getRecipeEpic = (action$: any) =>
  action$.pipe(
    ofType("GET_RECIPE"),
    switchMap((action: IGetRecipeAction) =>
      from(api.getRecipe(action.id)).pipe(
        map((response:any) => getRecipeSuccess(response.data)),
        catchError(error => {
          if (error.needFakeData) {
            return from(api.getRecipe(601651, true)).map((response:any) =>
              getRecipeSuccess(response.data)
            );
          } else {
            return Observable.of(getRecipeFail(error));
          }
        })
      )
    )
  );
