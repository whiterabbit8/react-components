import { Routes, Route } from 'react-router';
import Home from '../../pages/Home/Home';
import Oops from '../../pages/404/Oops';
import DetailedCard from '../DetailedCard/DetailedCard';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":id" element={<DetailedCard />} />
      </Route>
      <Route path="/*" element={<Oops />} />
    </Routes>
  );
}
