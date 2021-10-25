import React from 'react';
import { Switch, Route, Link, Router, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import ReactCounterRoot from './components/react-counter';

const Header = () => (
  <header>
    <Link to='/'>Home</Link>
    &nbsp;|&nbsp;
    <Link to='/react'>React Counter</Link>
    &nbsp;|&nbsp;
    <Link to='/vue'>Vue Counter</Link>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}
