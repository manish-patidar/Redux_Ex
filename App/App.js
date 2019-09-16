/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider} from 'react-redux'
import store from './Store/Store'

import Routes from './Routes'

const App = () => {
  return (
      <Provider store={store}>
          <Routes/>
      </Provider>
  );
};

export default App;
