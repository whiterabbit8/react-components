import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import NotFound from '../NotFound/NotFound';
import { Character } from '../../utilities/types';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store';
import { getCharacters } from '../../reducers/charactersReducer';

import './searchResults.scss';

export default function SearchResults(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({ page: '1' });
  const query = useSelector((state: RootState) => state.query.value);
  const { data, loading } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigate(`../react-rss/?page=${searchParams.get('page')}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(
      getCharacters({ name: query, page: searchParams.get('page') })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, searchParams]);

  if (loading) {
    return <Loader />;
  }

  if (data?.error) {
    return <NotFound />;
  }

  return (
    <div className="search-results">
      <ul className="search-results__list">
        {data?.results.map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </ul>
      <Pagination pageQuantity={data?.info.pages} />
    </div>
  );
}
