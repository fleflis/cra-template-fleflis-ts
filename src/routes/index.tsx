import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '../components/Container';

/**
 * Import URLs from a file, to make managing hyperlinks and routing easier
 */
import urls from '../common/urls';

/**
 * Importing pages with lazy, so each page has its own file when building
 * to production environment, making the website lightweight and with
 * easier maintenance.
 */

const Home = lazy(() => import('../pages/Home'));

const Routes: React.FC = () => (
  <div className="app-container">
    <Switch>
      {/* Fallback is the loading component while react is downloading the page */}
      <Suspense
        fallback={
          <Container>
            <h2>Loading...</h2>
          </Container>
        }
      >
        {/* Each route has its own path and component */}
        <Route exact path={urls.home} component={Home} />
      </Suspense>
    </Switch>
  </div>
);

export default Routes;
