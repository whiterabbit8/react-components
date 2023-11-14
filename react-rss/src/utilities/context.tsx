import { ReactNode, createContext, useContext, useState } from 'react';
import { ResultData } from './types';

type SearchContent = {
  query: string;
  setQuery: (value: string) => void;
  resultData: ResultData | undefined;
  setResultData: (data: ResultData | undefined) => void;
};

export const SearchContext = createContext<SearchContent>({
  query: `${localStorage.getItem('query')}`,
  setQuery: () => {},
  resultData: undefined,
  setResultData: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [resultData, setResultData] = useState<ResultData>();

  const value = { query, setQuery, resultData, setResultData };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
