import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchInput from '../../components/SearchInput/SearchInput';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { ResultData } from '../../utilities/types';
import { getCharacters } from '../../utilities/api';
import { useQueryContext } from '../../utilities/context';

import logo from '../../assets/logo.svg';

import './home.scss';

export default function Search(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [resultData, setResultData] = useState<ResultData>();
  const [success, setSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [style, setStyle] = useState('');

  const { query } = useQueryContext();

  useEffect(() => {
    if (searchParams.get('id')) {
      setStyle('container container_details');
    } else {
      setStyle('container');
    }
  }, [searchParams]);

  const makeSearch = (page = 1) => {
    setLoading(true);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
    getCharacters(query, page).then((data) => {
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
    <div className="search-page">
      <img className="logo" src={logo} alt="logo" />
      <div className={style}>
        <SearchInput makeSearch={makeSearch} />
        <ErrorButton />
        <SearchResults
          loadPage={makeSearch}
          isLoading={isLoading}
          resultData={resultData}
          success={success}
        />
        {searchParams.get('id') && <Outlet />}
      </div>
    </div>
  );
}
