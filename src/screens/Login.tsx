import React from 'react';
import {StyleSheet, View} from 'react-native';
import hooks from '../hooks';
import Components from '../components';
import {LoginProps} from '../types';

const Login = ({navigation}: LoginProps) => {
  hooks.useGoogleSignin();

  return (
    <View style={styles.container}>
      <Components.ScreenHeader backButton={() => navigation.goBack()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
