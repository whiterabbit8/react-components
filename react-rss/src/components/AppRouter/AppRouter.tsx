import { Routes, Route } from 'react-router';
import Search from '../../pages/Search/Search';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/react-rss" element={<Search />} />
    </Routes>
  );
}
