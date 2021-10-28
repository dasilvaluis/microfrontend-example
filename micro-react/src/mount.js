import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './app';

export function mount(targetElement, routerBasename = '') {
  const history = createBrowserHistory({ basename: routerBasename });

  const markup = (
    <React.StrictMode>
      <App history={ history } />
    </React.StrictMode>
  );

  ReactDOM.render(markup, targetElement);

  return {
    /**
     * @param {Object} param
     * @param {String} param.pathname 
     */
    onParentNavigate({ pathname: nextPathname }) {
      if (nextPathname.startsWith(routerBasename)) {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname === routerBasename ? '/' : nextPathname);
        } 
      }
    }
  }
}
