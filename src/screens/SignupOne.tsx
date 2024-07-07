import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Components from '../components';
import StyledComponents from '../styledComponents';
import {SignupOneScreenProps} from '../types';
import Wrappers from '../wrappers';

const SignupOne = ({navigation}: SignupOneScreenProps) => {
  return (
    <Wrappers.KeyboardDismiss>
      <View style={[styles.container]}>
        <Components.ScreenHeader
          title="Get started!"
          description="Create your account with us!"
        />
        <View style={styles.topSpacer} />
        <StyledComponents.Input
          label="First Name"
          placeholder="Enter your first name"
        />
        <View style={styles.spacer} />
        <StyledComponents.Input
          label="Last Name"
          placeholder="Enter your last name"
        />
        <View style={styles.spacer} />
        <StyledComponents.Input
          label="Phone Number"
          placeholder="Enter your phone number"
        />
        <View style={styles.spacer} />
        <StyledComponents.Input label="Email" placeholder="Enter your email" />
        <View style={styles.bottomButton}>
          <StyledComponents.Button
            onPress={() => navigation.navigate('SignupTwoScreen')}>
            Continue
          </StyledComponents.Button>
        </View>
      </View>
    </Wrappers.KeyboardDismiss>
  );
};

export default SignupOne;

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    backgroundColor: 'white',
  },
  spacer: {
    marginTop: RFValue(10),
  },
  bottomButton: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: RFValue(40),
  },
  topSpacer: {
    marginTop: RFValue(30),
  },
});
