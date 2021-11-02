import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import routes from '@App/routes';

import '@App/library/scss//bootstrap/bootstrap.scss';
import '@App/library/scss/styles.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props: React.ReactElement) => {
                return (
                  <React.Suspense fallback={<>Loading</>}>
                    <route.component {...props} />
                  </React.Suspense>
                );
              }}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default hot(App);
