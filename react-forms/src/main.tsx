import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Main/Main';

import './style.scss';
import Form from './pages/Form/Form';
import LiveForm from './pages/LiveForm/LiveForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'form/',
    element: <Form />,
  },
  {
    path: 'live-form/',
    element: <LiveForm />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
