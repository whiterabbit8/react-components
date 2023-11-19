import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setQuery } from '../../reducers/queryReducer';

import './SearchInput.scss';

type SearchInputProps = {
  makeSearch: () => void;
};

export default function SearchInput({
  makeSearch,
}: SearchInputProps): JSX.Element {
  const [value, setValue] = useState(localStorage.getItem('query') || '');

  //const { query, setQuery } = useSearchContext();
  const query = useSelector((state: RootState) => state.query.value);
  const dispatch = useDispatch();

  useEffect(() => {
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('query', value);
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChange = (newQuery: string) => {
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
        onClick={() => handleChange(value)}
      />
    </div>
  );
}
