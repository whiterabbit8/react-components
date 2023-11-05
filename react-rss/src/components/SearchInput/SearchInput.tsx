import { useEffect, useState } from 'react';
import { Character } from '../../utilities/types';
import baseUrl from '../../utilities/constants';
import './SearchInput.scss';

type SearchInputProps = {
  setFound: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

export default function SearchInput({
  setFound,
  setLoading,
  setTotalPages,
  setCharacters,
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

  const makeSearch = async (name?: string | null) => {
    setFound(false);
    setLoading(true);
    const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
    const response = await fetch(`${baseUrl}?page=1&${searchUrl}`, {
      method: 'GET',
    });
    if (response.status === 200) {
      setFound(true);
      const data = await response.json();
      setTotalPages(data.info.pages);
      setCharacters(data.results);
      console.log(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    makeSearch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    localStorage.setItem('query', query);
    makeSearch(query);
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
