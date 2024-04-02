import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layouts/layout';
import Main from '@/pages/main';

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
  }
]);

export default App;
