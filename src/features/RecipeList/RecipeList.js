import React, { useEffect, useContext, useCallback } from "react";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import RecipeItem from "./RecipeItem/RecipeItem";
import Paging from "./Paging";
import { SearchContext } from "../../contexts/SearchContext";
import { search } from "./actions";
import { COUNT_RECIPIES_ON_PAGE } from "../../config";

import useTraceUpdated from "../../hooks/useTraceUpdated";

import "./RecipeList.scss";

const RecipeList = props => {
  const { query } = useContext(SearchContext);

  const dispatch = useDispatch();

  const runSearch = useCallback(
    (query, offset, useFakeData) =>
      dispatch(search(query, offset, useFakeData)),
    [dispatch]
  );

  const { data, isLoading, error } = useSelector(({ recipeList }) => ({
    isLoading: recipeList.isLoading,
    data: recipeList.data,
    error: recipeList.error
  }));

  useTraceUpdated(props, "RecipeList");

  useEffect(() => {
    if (query.length < 1) return;
    runSearch(query, 0);
  }, [query, runSearch]);

  const onPageClickHandler = page => {
    if (page === "next") {
      runSearch(query, data.offset + COUNT_RECIPIES_ON_PAGE);
    } else if (page === "prev") {
      runSearch(query, data.offset - COUNT_RECIPIES_ON_PAGE);
    }
  };

  let result = null;
  let totalResults = 0;

  if (isLoading) {
    result = <Spinner />;
  } else if (error) {
    result = <div>{error.message}</div>;
  } else if (data && data.results) {
    result = data.results.map(item => (
      <RecipeItem recipe={item} key={item.id} />
    ));

    // need this because there is a bug in api of spoonacular
    totalResults =
      data.totalResults < data.results.length
        ? data.results.length
        : data.totalResults;
  }

  return (
    <div className="recipies d-flex justify-content-start justify-content-md-between flex-column">
      <div className="recipies__list d-flex flex-column ">{result}</div>
      <div className="text-center">
        <Paging
          pageChangedHandler={onPageClickHandler}
          totalResults={totalResults}
          offset={data.offset}
          cntOnPage={COUNT_RECIPIES_ON_PAGE}
        />
      </div>
    </div>
  );
};


export { RecipeList };

export default RecipeList;
