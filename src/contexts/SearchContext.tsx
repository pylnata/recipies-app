import React, { createContext, useState, useContext } from "react";

export const SearchContext = createContext<{
  query: string;
  updateQuery: React.Dispatch<React.SetStateAction<string>>;
}>({
  query: "",
  updateQuery: (q) => {}
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [query, updateQuery] = useState("pizza");

  return (
    <SearchContext.Provider value={{ query, updateQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchConsumer = SearchContext.Consumer;
