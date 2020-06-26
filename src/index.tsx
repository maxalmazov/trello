import 'idempotent-babel-polyfill';
import initReactFastclick from 'react-fastclick';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as WebFont from 'webfontloader';
import Cookies from 'universal-cookie';
import { Provider as ReduxProvider} from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';
import { theme } from './theme';
import { ThemeProvider } from './theme';

import { createBrowserHistory } from 'history';

import registerServiceWorker from './registerServiceWorker';
import { initProviders } from './lib/providers';

import Root from './pages/Root/Root.container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

initReactFastclick();

initProviders({
  cookies: new Cookies(),
});

WebFont.load({
  google: {
    families: ['Nunito:300,600,800', 'sans-serif'],
  },
});

export const history = createBrowserHistory();

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <DndProvider backend={HTML5Backend}>
          <Root />
        </DndProvider>
      </Router>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);

registerServiceWorker();
