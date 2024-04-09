import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import { Main, Login } from '@/pages';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />
      }
    ]
  },
  {
    path: '/user/login',
    element: <Login />
  }
]);

export default App;
