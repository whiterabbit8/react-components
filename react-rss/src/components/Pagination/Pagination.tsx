import { useSearchParams } from 'react-router-dom';

import './pagination.scss';

type PaginationProps = {
  pageQuantity: number | undefined;
};

export default function Pagination({
  pageQuantity,
}: PaginationProps): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const setPage = (page?: string) => {
    let pageNumber = 0;
    const currPage = Number(searchParams.get('page'));
    switch (page) {
      case 'prev':
        pageNumber = currPage - 1;
        break;
      case 'next':
        pageNumber = currPage + 1;
        break;
      case 'last':
        pageNumber = pageQuantity as number;
        break;
      default:
        pageNumber = 1;
    }
    searchParams.set('page', `${pageNumber}`);
    setSearchParams(searchParams);
  };

  return (
    <div className="pagination">
      <button
        disabled={searchParams.get('page') === '1'}
        className="pagination__btn"
        onClick={() => setPage()}
      >
        &lt;&lt;
      </button>
      <button
        disabled={searchParams.get('page') === '1'}
        className="pagination__btn"
        onClick={() => setPage('prev')}
      >
        &lt;
      </button>
      <div className="pagination__page-number">{searchParams.get('page')}</div>
      <button
        disabled={searchParams.get('page') === `${pageQuantity}`}
        className="pagination__btn"
        onClick={() => setPage('next')}
      >
        &gt;
      </button>
      <button
        disabled={searchParams.get('page') === `${pageQuantity}`}
        className="pagination__btn"
        onClick={() => setPage('last')}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
