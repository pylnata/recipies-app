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
