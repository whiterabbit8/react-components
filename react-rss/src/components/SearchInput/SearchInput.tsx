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
    // There shouldn't be any dependencies but linter warns
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    localStorage.setItem('query', query);
    makeSearch();
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="enter rick and morty character name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleClick} />
    </div>
  );
}
