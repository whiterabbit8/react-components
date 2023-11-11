import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home';
import Details from '../Details/Details';
import Oops from '../../pages/404/Oops';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":id" element={<Details />} />
      </Route>
      <Route path="/*" element={<Oops />} />
    </Routes>
  );
}
