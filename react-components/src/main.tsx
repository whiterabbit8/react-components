import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Search from './components/Search';
import { ITEMS_PER_PAGE, baseUrl, token } from './utilities/discogsApi';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Search url={baseUrl} token={token} page='1' perPage={ITEMS_PER_PAGE}/>
  </React.StrictMode>
);
