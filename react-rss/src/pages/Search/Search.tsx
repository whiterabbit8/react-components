import { useState } from 'react';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchInput from '../../components/SearchInput/SearchInput';
import { ResultData } from '../../utilities/types';
import getCharacters from '../../utilities/api';

import './search.scss';

export default function Search(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [resultData, setResultData] = useState<ResultData>();
  const [success, setSuccess] = useState(false);

  const makeSearch = (page = 1) => {
    setLoading(true);
    getCharacters(localStorage.getItem('query'), page).then((data) => {
      if (!data.error) {
        setResultData(data);
        setSuccess(true);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    });
  };

  if (hasError) throw new Error('App is crashed!');

  return (
    <div className="container">
      <SearchInput makeSearch={makeSearch} />
      <button className="error-button" onClick={() => setError(true)}>
        Throw Error
      </button>
      <SearchResults
        loadPage={makeSearch}
        isLoading={isLoading}
        resultData={resultData}
        success={success}
      />
    </div>
  );
}
