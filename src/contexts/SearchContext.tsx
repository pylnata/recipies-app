import React, { createContext, useState, useContext } from "react";

export const SearchContext = createContext({
  query: "",
  updateQuery: (query: string) => {}
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
  const [query, updateQuery] = useState("pizza");

  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchConsumer = SearchContext.Consumer;
