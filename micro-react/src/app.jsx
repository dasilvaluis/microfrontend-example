import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Counter from './pages/counter';
import Welcome from './pages/welcome';
import './styles/app.scss';

export default function App({ history }) {
  return (
    <div className="react-app" data-testid="react-app">
      <Router history={ history }>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/counter" exact>
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
