import React, {useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Components from '../components';
import StyledComponents from '../styledComponents';
import {SignupOneScreenProps} from '../types';
import Wrappers from '../wrappers';
import Text from '../styledComponents/Text';

const SignupOne = ({navigation}: SignupOneScreenProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNavigation = () => {
    try {
      if (!firstName) {
        throw new Error('First Name is required');
      }
      if (!lastName) {
        throw new Error('Last Name is required');
      }
      if (!phoneNumber) {
        throw new Error('Phone Number is required');
      }
      if (!email) {
        throw new Error('Email Address is required');
      }

      navigation.navigate('SignupTwoScreen', {
        firstName,
        lastName,
        email,
        phoneNumber,
      });
    } catch (error) {
      const finalError = error as Error;
      Alert.alert('Error', finalError.message);
    }
  };

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
          value={firstName}
          onChangeText={setFirstName}
        />
        <View style={styles.spacer} />
        <StyledComponents.Input
          label="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.spacer} />
        <StyledComponents.Input
          label="Phone Number"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.spacer} />
        <StyledComponents.Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.bottomButton}>
          <StyledComponents.Button onPress={handleNavigation}>
            Continue
          </StyledComponents.Button>
          <View style={styles.loginLink}>
            <Text>Got a google account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text variant="bold" style={styles.loginText}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
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
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RFValue(8),
    justifyContent: 'center',
    marginTop: RFValue(8),
  },
  loginText: {
    color: '#ba000d',
  },
});
