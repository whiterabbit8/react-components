import { useEffect, useState } from 'react';
import { useSearchContext } from '../../utilities/context';

import './SearchInput.scss';

type SearchInputProps = {
  makeSearch: () => void;
};

export default function SearchInput({
  makeSearch,
}: SearchInputProps): JSX.Element {
  const [value, setValue] = useState(localStorage.getItem('query') || '');

  const { query, setQuery } = useSearchContext();

  useEffect(() => {
    console.log(query);
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('query', value);
    makeSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        placeholder="enter character name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-bar__button" onClick={() => setQuery(value)} />
    </div>
  );
}
