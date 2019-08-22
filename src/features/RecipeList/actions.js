export const actionTypes = {
  SEARCH_SUCCESS: "SEARCH_SUCCESS",
  SEARCH_FAIL: "SEARCH_FAIL",
  SEARCH: "SEARCH"
};

export const search = (query, offset) => ({
  type: actionTypes.SEARCH,
  query,
  offset
});

export const searchSuccess = data => ({
  type: actionTypes.SEARCH_SUCCESS,
  data
});

export const searchFail = message => ({
  type: actionTypes.SEARCH_FAIL,
  error: message
});

/*
const callApi = (query, offset, dispatch, useFake = false) => {
  return api.getSearchResults(query, offset, useFake).then(response => {
    dispatch({
      type: actionTypes.SEARCH_SUCCESS,
      data: response.data
    });
  });
};

export const search = (query, offset) => dispatch => {
  dispatch({ type: actionTypes.SEARCH_INIT });
  console.log("api list call");
  callApi(query, offset, dispatch).catch(error => {
    if (error.needFakeData) {
      // need use fake data
      callApi(query, offset, dispatch, true).catch(err => {
        dispatch({ type: actionTypes.SEARCH_FAIL, err: err });
      });
    } else {
      dispatch({ type: actionTypes.SEARCH_FAIL, error: error });
    }
  });
};
*/
