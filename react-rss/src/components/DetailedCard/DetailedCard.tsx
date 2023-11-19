import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DetailsProps from '../DetailedProps/DetailedProps';
import DetailsHeader from '../DetailedHeader/DetailedHeader';
import Loader from '../Loader/Loader';
import { useAppSelector, useAppDispatch } from '../../app/store';
import { getCharacterById } from '../../reducers/characterByIdReducer';

import './detailedCard.scss';

export default function DetailedCard(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { character, loading } = useAppSelector((state) => state.characterById);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCharacterById(searchParams.get('id')))
  }, [searchParams]);

  if (loading) {
    return (
      <div className='details'>
        <Loader />
      </div>
    )
  }

  return (
    <div className="details">
      {searchParams.get('id') && (
        <>
          <img
            className={`details__img details__img_${character?.status.toLowerCase()}`}
            src={character?.image}
            alt={character?.name}
          />
          <div
            className={`details__status details__status_${character?.status.toLowerCase()}`}
          >
            {character?.status}
          </div>
          <h2 className="details__name">{character?.name}</h2>
          <DetailsHeader name="properties" />
          <DetailsProps name="species" value={character?.species} />
          <DetailsProps name="gender" value={character?.gender} />
          <DetailsHeader name="whereabouts" />
          <DetailsProps name="origin" value={character?.origin.name} />
          <DetailsProps name="location" value={character?.location.name} />
          <button
            className="details-btn"
            onClick={() =>
              setSearchParams({ page: `${searchParams.get('page')}` })
            }
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}
