import { Routes, Route } from 'react-router';
import Search from '../../pages/Search/Search';
import Details from '../Details/Details';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/*" element={<Search />}>
        <Route path=":id" element={<Details />} />
      </Route>
    </Routes>
  );
}
