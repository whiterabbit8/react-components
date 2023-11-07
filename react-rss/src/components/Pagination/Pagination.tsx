import { Link } from 'react-router-dom';

import './pagination.scss';

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageQuantity: number | undefined;
};

export default function Pagination({
  page,
  setPage,
  pageQuantity,
}: PaginationProps): JSX.Element {
  return (
    <div className="pagination">
      <Link to={'?page=1'}>
        <button className="pagination-btn" onClick={() => setPage(1)}>
          &lt;&lt;
        </button>
      </Link>
      <Link to={`?page=${page - 1}`}>
        <button
          disabled={page === 1}
          className="pagination-btn"
          onClick={() => setPage(page - 1)}
        >
          &lt;
        </button>
      </Link>
      <div className="page-number">{page}</div>
      <Link to={`?page=${page + 1}`}>
        <button
          disabled={page === pageQuantity}
          className="pagination-btn"
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
      </Link>
      <Link to={`?page=${pageQuantity}`}>
        <button
          className="pagination-btn"
          onClick={() => setPage(pageQuantity as number)}
        >
          &gt;&gt;
        </button>
      </Link>
    </div>
  );
}
