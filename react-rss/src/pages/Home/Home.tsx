import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchInput from '../../components/SearchInput/SearchInput';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import { getCharacters } from '../../utilities/api';
import { useSearchContext } from '../../utilities/context';

import logo from '../../assets/logo.svg';

import './home.scss';

export default function Home(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [style, setStyle] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const { setResultData } = useSearchContext();

  const query = useSelector((state: RootState) => state.query.value);

  useEffect(() => {
    if (searchParams.get('id')) {
      setStyle('container container_details');
    } else {
      setStyle('container');
    }
  }, [searchParams]);

  const makeSearch = (page = 1, search = true) => {
    setLoading(true);
    if (search) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    }
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
          success={success}
        />
        {searchParams.get('id') && <Outlet />}
      </div>
    </div>
  );
}
