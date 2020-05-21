import React from 'react'
import {Container} from 'next/app'
import configureStore from '../ducks/store'
import {AppProps} from 'next/app';
import {Provider} from 'react-redux';

const store = configureStore();

const MyApp: React.FC<AppProps> = props => {
  const {Component, pageProps} = props;
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

export default MyApp;
