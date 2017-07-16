import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { ThemeProvider } from 'styled-components';
import Routes from '../routes';
import theme from '../theme';

export default function Root({ store, history }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <ConnectedRouter history={history}>
          <Routes />
      </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
}