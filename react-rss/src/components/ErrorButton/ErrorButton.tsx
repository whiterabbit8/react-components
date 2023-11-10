import { useState } from 'react';

import './errorButton.scss';

export default function ErrorButton(): JSX.Element {
  const [hasError, setError] = useState(false);

  if (hasError) throw new Error('App is crashed!');

  return (
    <button className="error-btn" onClick={() => setError(true)}>
      Throw Error
    </button>
  );
}
