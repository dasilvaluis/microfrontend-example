import React, { useEffect } from 'react';
import { Switch, Route, Link, Router, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import ReactCounterRoot from './components/react-counter';
import VueAppRoot from './components/vue-app';
import AllTogether from './components/all-together';

const Header = () => (
  <header>
    <Link to='/'>Home</Link>
    &nbsp;|&nbsp;
    <Link to='/react'>React Counter</Link>
    &nbsp;|&nbsp;
    <Link to='/vue'>Vue Counter</Link>
    &nbsp;|&nbsp;
    <Link to='/all-together'>All Together</Link>
  </header >
);

const Home = () => (
  <div>
    <h1>Hello! This is the container.</h1>
  </div>
);

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route> 
          <Route path="/react" exact>
            <ErrorBoundary>
              <ReactCounterRoot />
            </ErrorBoundary>
          </Route>
          <Route path="/vue" exact>
            <ErrorBoundary>
              <VueAppRoot />
            </ErrorBoundary>
          </Route>
          <Route path="/all-together" exact>
            <ErrorBoundary>
              <AllTogether />
            </ErrorBoundary>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
