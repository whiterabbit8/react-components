import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchInput from '../../components/SearchInput/SearchInput';
import ErrorButton from '../../components/ErrorButton/ErrorButton';
import ItemsPerPage from '../../components/ItemsPerPage/ItemsPerPage';

import logo from '../../assets/logo.svg';

import './home.scss';

export default function Home(): JSX.Element {
  const [style, setStyle] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('id')) {
      setStyle('container container_details');
    } else {
      setStyle('container');
    }
  }, [searchParams]);

  return (
    <div className="search-page">
      <img className="logo" src={logo} alt="logo" />
      <div className={style}>
        <SearchInput />
        <ItemsPerPage />
        <ErrorButton />
        <SearchResults />
        {searchParams.get('id') && <Outlet />}
      </div>
    </div>
  );
}
