import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Main(): JSX.Element {
  const [page, setPage] = useState('main');

  return (
    <div className="container">
      <nav className="nav-bar">
        <Link to={'/'}>
          <button
            className="nav-btn"
            id="main"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              setPage(target.id);
            }}
            disabled={page === 'main'}
          >
            Main
          </button>
        </Link>
        <Link to={'form'}>
          <button
            className="nav-btn"
            id="form1"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              setPage(target.id);
            }}
            disabled={page === 'form1'}
          >
            Form
          </button>
        </Link>
        <Link to={'live-form'}>
          <button
            className="nav-btn"
            id="form2"
            onClick={(e) => {
              const target = e.target as HTMLElement;
              setPage(target.id);
            }}
            disabled={page === 'form2'}
          >
            React Hook Form
          </button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
