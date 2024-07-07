import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SignupTwoScreenProps} from '../types';
import Components from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import hooks from '../hooks';

const SignupTwo = ({navigation}: SignupTwoScreenProps) => {
  hooks.useGoogleSignin();

  return (
    <View style={styles.container}>
      <Components.ScreenHeader backButton={() => navigation.goBack()} />
    </View>
  );
};

export default SignupTwo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: RFValue(12),
    backgroundColor: 'white',
    flex: 1,
  },
});
