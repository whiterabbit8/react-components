import { useEffect, useState } from 'react';

import './SearchInput.scss';

type SearchInputProps = {
  makeSearch: () => void;
};

export default function SearchInput({
  makeSearch,
}: SearchInputProps): JSX.Element {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const storageValue = localStorage.getItem('query')
      ? localStorage.getItem('query')
      : '';
    if (storageValue) {
      setQuery(storageValue);
    }
  }, []);

  useEffect(() => {
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    localStorage.setItem('query', query);
    makeSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleClick}>
      <input
        className="search-bar__input"
        placeholder="enter character name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="search-bar__button"
        type="submit"
      />
    </form>
  );
}
