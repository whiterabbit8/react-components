import { Routes, Route } from 'react-router';
import Search from '../Search/Search';

export default function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Search />} />
    </Routes>
  )
}