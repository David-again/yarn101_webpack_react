import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from './Loading';

// import DynamicPage from './DynamicPage';
const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName: 'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);

const AsyncNoMatch = importedComponent(
    () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
    {
      LoadingComponent: Loading
    }
  );

// import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;