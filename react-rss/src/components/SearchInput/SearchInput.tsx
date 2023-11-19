import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../reducers/queryReducer';

import './SearchInput.scss';

export default function SearchInput(): JSX.Element {
  const [value, setValue] = useState(localStorage.getItem('query') || '');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleClick = (newQuery: string) => {
    localStorage.setItem('query', value);
    searchParams.set('page', '1');
    setSearchParams(searchParams);
    dispatch(setQuery(newQuery));
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        placeholder="enter character name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="search-bar__button"
        onClick={() => {
          handleClick(value);
        }}
      />
    </div>
  );
}
