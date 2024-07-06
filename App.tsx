import CodePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME};

const App = () => {
  return <></>;
};

export default CodePush(codePushOptions)(App);
