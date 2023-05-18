import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import { Root } from './routes/Root';
import { Index } from './routes/Index';
import { FourOhFour } from './404';
import { Page as Page1 } from './routes/Page1';
import { Page as Page2 } from './routes/Page2';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <FourOhFour />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'page1',
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />,
      }
    ]
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
