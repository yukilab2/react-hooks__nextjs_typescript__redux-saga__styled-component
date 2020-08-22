import React from 'react';
import configureStore from '../ducks/store';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

const store = configureStore();

const MyApp: React.FC<AppProps> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
