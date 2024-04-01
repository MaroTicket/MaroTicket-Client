import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/containers/layout';
import Main from '@/containers/main';

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
