import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "@/components/ui/provider"

import App from './App.jsx';
import Home from './pages/Home.jsx'; // Keep Home page eager-loaded
import Error from './pages/Error.jsx';

// Lazy load all other pages for better performance
const Portfolio = React.lazy(() => import('./pages/Portfolio.jsx'));
const Resume = React.lazy(() => import('./pages/Resume.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));

// Import PageLoader component
import PageLoader from './components/PageLoader.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: '/Portfolio',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: '/Resume',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Resume />
          </Suspense>
        ),
      },
      {
        path: '/Contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
