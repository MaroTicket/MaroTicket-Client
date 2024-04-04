import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/common/Layout';
import Main from '@/pages/Main';

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
