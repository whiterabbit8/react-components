import { useDispatch, useSelector } from 'react-redux';
import { setPerPage } from '../../store/slice/perPageSlice';
import { RootState } from '../../store/store';

import './itemsPerPage.scss';

type PerPageNumberParams = {
  displayedValue: number;
};

export default function PerPageNumber({
  displayedValue,
}: PerPageNumberParams): JSX.Element {
  const perPage = useSelector((state: RootState) => state.perPage.value)
  const dispatch = useDispatch();

  const handleClick = (value: number) => {
    dispatch(setPerPage(value))
  }

  return (
    <>
      <input
        type="radio"
        id={`${displayedValue}`}
        className="per-page__number-input"
        checked={perPage === displayedValue}
      />
      <label
        htmlFor="5"
        className="per-page__number"
        onClick={() => handleClick(displayedValue)}
      >
        {displayedValue}
      </label>
    </>
  );
}
