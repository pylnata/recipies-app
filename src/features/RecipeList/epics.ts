import { Observable, from } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import { ofType } from "redux-observable";
import { catchError, switchMap, map } from "rxjs/operators";

import * as api from "../../service/api";
import { searchSuccess, searchFail } from "./actions";
import { ISearchAction } from "./types";

export const searchEpic = (action$: any) =>
  action$.pipe(
    ofType("SEARCH"),
    switchMap((action: ISearchAction) =>
      from(api.getSearchResults(action.query, action.offset)).pipe(
        map((response:any) => searchSuccess(response.data)),
        catchError(error => {
          if (error.needFakeData) {
            return from(api.getSearchResults("", 0, true)).map((response: any) =>
              searchSuccess(response.data)
            );
          } else {
            return Observable.of(searchFail(error));
          }
        })
      )
    )
  );
