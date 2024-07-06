import React from 'react';
import {View} from 'react-native';
import CodePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return <View />;
};

export default CodePush(codePushOptions)(App);
