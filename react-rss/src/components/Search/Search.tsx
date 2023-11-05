import { useEffect, useState } from 'react';

import { Character } from '../../utilities/types';
import SearchResults from '../SearchResults/SearchResults';
import SearchInput from '../SearchInput/SearchInput';
import Pagination from '../Pagination/Pagination';
import baseUrl from '../../utilities/constants';

import './search.scss';

export default function Search(): JSX.Element {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [hasFound, setFound] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const getPage = async () => {
      setLoading(true);
      const name = localStorage.getItem('query');
      const searchUrl = name ? `name=${name.trim().replace(' ', '+')}` : '';
      const response = await fetch(`${baseUrl}?page=${page}&${searchUrl}`, {
        method: 'GET',
      });
      const data = await response.json();
      setCharacters(data.results);
    };
    getPage().then(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [hasFound]);

  if (hasError) throw new Error('App is crashed!');

  return (
    <div className="container">
      <SearchInput
        setFound={setFound}
        setLoading={setLoading}
        setTotalPages={setTotalPages}
        setCharacters={setCharacters}
      />
      <button className="error-button" onClick={() => setError(true)}>
        Throw Error
      </button>
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !hasFound && <h2>Character has not found</h2>}
      {!isLoading && hasFound && <SearchResults characters={characters} />}
      {!isLoading && hasFound && (
        <Pagination active={page} total={totalPages} setPage={setPage} />
      )}
    </div>
  );
}
