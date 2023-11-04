import { useState } from 'react';

import './SearchInput.scss';

export default function SearchInput(query: string): JSX.Element {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="search-wrapper">
        <input
          className="search-input"
          placeholder="enter rick and morty character name"
          value={query}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => localStorage.setItem('query', value)}
        />
      </div>
    </>
  );
}
