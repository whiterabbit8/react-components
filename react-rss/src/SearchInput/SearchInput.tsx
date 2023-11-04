import { useState } from "react";

export default function SearchInput(query: string): JSX.Element {
  const [value, setValue] = useState('');

  return (
    <div className="container">
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
    </div>
  )
}