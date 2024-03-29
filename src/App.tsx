import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/containers/layout';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: []
  }
]);

export default App;
