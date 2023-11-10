import notFound from '../../assets/not-found.png';

import './notFound.scss';

export default function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <img
        className="not-found__img"
        src={notFound}
        alt="character not found"
      />
      <h2>Character doesn&apos;t exist at this universe</h2>
    </div>
  );
}
