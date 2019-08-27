import React, { createContext, useState, useContext } from "react";

export const SearchContext = createContext({
  query: "",
  updateQuery: () => {}
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = props => {
  const [query, updateQuery] = useState("pizza");

  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const SearchConsumer = SearchContext.Consumer;
