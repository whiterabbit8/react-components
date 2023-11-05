import { useNavigate } from 'react-router-dom';
import './pagination.scss';
import { useEffect } from 'react';

type PaginationProps = {
  active: number;
  total: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  active,
  total,
  setPage,
}: PaginationProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`../?page=${active}`);
  }, []);

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={() => setPage(1)}>
        &lt;&lt;
      </button>
      <button
        className="pagination-btn"
        onClick={() => setPage(active - 1)}
        disabled={active === 1}
      >
        &lt;
      </button>
      <div className="page-number">{active}</div>
      <button
        className="pagination-btn"
        onClick={() => setPage(active + 1)}
        disabled={active === total}
      >
        &gt;
      </button>
      <button className="pagination-btn" onClick={() => setPage(total)}>
        &gt;&gt;
      </button>
    </div>
  );
}
