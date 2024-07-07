import React from 'react';
import CodePush from 'react-native-code-push';
import {Provider} from 'react-redux';
import Src from './src';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return (
    <Provider store={Src.Store}>
      <Src.Navigation />
    </Provider>
  );
};

export default CodePush(codePushOptions)(App);
