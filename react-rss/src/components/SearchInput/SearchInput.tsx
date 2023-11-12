import { useEffect, useState } from 'react';

import './SearchInput.scss';
import { useQueryContext } from '../../utilities/context';

type SearchInputProps = {
  makeSearch: () => void;
};

export default function SearchInput({
  makeSearch,
}: SearchInputProps): JSX.Element {
  const [value, setValue] = useState('');

  const { setQuery } = useQueryContext();

  useEffect(() => {
    const storageValue = localStorage.getItem('query')
      ? localStorage.getItem('query')
      : '';
    if (storageValue) {
      setValue(storageValue);
    }
    setQuery(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    localStorage.setItem('query', value);
    setQuery(value);
    makeSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleClick}>
      <input
        className="search-bar__input"
        placeholder="enter character name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-bar__button" type="submit" />
    </form>
  );
}
