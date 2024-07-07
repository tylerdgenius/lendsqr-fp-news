import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Components from '../components';
import {SignupOneScreenProps} from '../types';

const SignupOne = ({navigation}: SignupOneScreenProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top + 10}]}>
      <Components.Input
        label="First Name"
        placeholder="Enter your first name"
      />
      <View style={styles.spacer} />
      <Components.Input label="Last Name" placeholder="Enter your last name" />
      <View style={styles.spacer} />
      <Components.Input
        label="Phone Number"
        placeholder="Enter your phone number"
      />
      <View style={styles.spacer} />
      <Components.Input label="Email" placeholder="Enter your email" />
      <Components.Button onPress={() => navigation.navigate('SignupTwoScreen')}>
        Continue
      </Components.Button>
    </View>
  );
};

export default SignupOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  spacer: {
    marginTop: RFValue(10),
  },
});
