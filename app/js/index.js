import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import Home from './containers/home_page.js';
import FAQ from './containers/FAQ_page.js';
import Contact from './containers/contact_page.js';
import Features from './containers/features_page.js';
import reducers from './reducers';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware, ReduxPromise, thunk)
);

WebFont.load({
  google: {
    families: ['Montserrat', 'Source Serif Pro', 'sans-serif']
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
