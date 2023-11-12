import { createContext, useContext } from 'react';

type QueryContent = {
  query: string;
  setQuery: (value: string) => void;
};

export const QueryContext = createContext<QueryContent>({
  query: '',
  setQuery: () => '',
});

export const useQueryContext = () => useContext(QueryContext);
