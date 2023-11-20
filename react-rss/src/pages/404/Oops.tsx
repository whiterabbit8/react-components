import { useNavigate } from 'react-router-dom';
import error from '../../assets/404.png';

import './oops.scss';

export default function Oops(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="oops-container">
      <div className="oops-img-container">
        <span>4</span>
        <img className="oops-img" src={error} alt="404 error" />
        <span>4</span>
      </div>
      <h2 className="oops-header">
        The page you are trying to search has been
      </h2>
      <h2 className="oops-header">moved to another universe.</h2>
      <button className="oops-button" onClick={() => navigate('/react-rss/')}>
        Get me home
      </button>
    </div>
  );
}
