import { useSearchParams } from 'react-router-dom';
import DetailsProps from '../DetailedProps/DetailedProps';
import DetailsHeader from '../DetailedHeader/DetailedHeader';
import Loader from '../Loader/Loader';
import { useGetCharacterByIdQuery } from '../../store/apiSlice/charactersApi';

import './detailedCard.scss';

export default function DetailedCard(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetCharacterByIdQuery(
    `${searchParams.get('id')}`
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img
            className={`details__img details__img_${data?.status.toLowerCase()}`}
            src={data?.image}
            alt={data?.name}
          />
          <div
            className={`details__status details__status_${data?.status.toLowerCase()}`}
          >
            {data?.status}
          </div>
          <h2 className="details__name">{data?.name}</h2>
          <DetailsHeader name="properties" />
          <DetailsProps name="species" value={data?.species} />
          <DetailsProps name="gender" value={data?.gender} />
          <DetailsHeader name="whereabouts" />
          <DetailsProps name="origin" value={data?.origin.name} />
          <DetailsProps name="location" value={data?.location.name} />
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
