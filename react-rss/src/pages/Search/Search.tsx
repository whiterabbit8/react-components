import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchInput from '../../components/SearchInput/SearchInput';
import { ResultData } from '../../utilities/types';
import { getCharacters } from '../../utilities/api';

import './search.scss';
import ErrorButton from '../../components/ErrorButton/ErrorButton';

export default function Search(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [resultData, setResultData] = useState<ResultData>();
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const [style, setStyle] = useState('');

  useEffect(() => {
    if (searchParams.get('id')) {
      setStyle('container details')
    } else {
      setStyle('container');
    }
  }, [searchParams]);

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

  return (
    <div className={style}>
      <SearchInput makeSearch={makeSearch} />
      <ErrorButton/>
      <SearchResults
        loadPage={makeSearch}
        isLoading={isLoading}
        resultData={resultData}
        success={success}
      />
      {searchParams.get('id') && <Outlet/>}
    </div>
  );
}
