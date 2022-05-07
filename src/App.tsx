import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/routes';
import React, { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map(
          ({ component: Component, layout: LayoutProp, path }, index) => {
            const Layout = LayoutProp === null ? Fragment : LayoutProp
            return (
              <Route
                key={index}
                path={path}
                element={
                  <React.Suspense fallback={'loading...'}>
                      <Layout>
                        <Component />
                      </Layout>
                  </React.Suspense>
                }
              />
            );
          },
        )}
      </Routes>
    </Router>
  );
}

export default App;
