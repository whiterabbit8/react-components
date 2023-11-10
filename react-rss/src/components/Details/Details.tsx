import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DetailsProps from '../DetailsProps/DetailsProps';
import { Character } from '../../utilities/types';
import { baseUrl } from '../../utilities/api';

import './details.scss';
import DetailsHeader from '../DetailsHeader/DetailsHeader';

export default function Details(): JSX.Element {
  const [character, setCharacter] = useState<Character>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getCharacter = async () => {
      const id = searchParams.get('id');
      const response = await fetch(`${baseUrl}${id}`, { method: 'GET' });
      const data = await response.json();
      setCharacter(data);
    };
    if (searchParams.get('id')) {
      getCharacter();
    }
  }, [searchParams]);

  return (
    <div className="details">
      {searchParams.get('id') && (
        <>
          <img className={`details__img details__img_${character?.status.toLowerCase()}`} src={character?.image} alt={character?.name} />
          <div className={`details__status details__status_${character?.status.toLowerCase()}`}>{character?.status}</div>
          <h2 className='details__name'>{character?.name}</h2>
          <DetailsHeader name="properties" />
          <DetailsProps name="species" value={character?.species} />
          <DetailsProps name="gender" value={character?.gender} />
          <DetailsHeader name="whereabouts" />
          <DetailsProps name="origin" value={character?.origin.name} />
          <DetailsProps name="location" value={character?.location.name} />
          <button
            className='details-btn'
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
