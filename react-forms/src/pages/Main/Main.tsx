import { Link } from 'react-router-dom';

export default function Main(): JSX.Element {
  return (
    <div className="container">
      <h1>Choose the form:</h1>
      <Link to={'form'}>Form</Link>
      <Link to={'live-form'}>React Hook Form</Link>
    </div>
  );
}
