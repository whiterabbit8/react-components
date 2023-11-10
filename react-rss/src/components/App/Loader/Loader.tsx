import loader from '../../../assets/loader.png';

import './loader.scss';

export default function Loader(): JSX.Element {
  return (
    <div className="loader-container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  );
}
