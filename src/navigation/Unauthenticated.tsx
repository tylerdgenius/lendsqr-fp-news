import React from 'react';
import Screens from '../screens';
import {Stack} from './lib';

const Unauthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignupOneScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignupOneScreen" component={Screens.SignupOne} />
      <Stack.Screen name="LoginScreen" component={Screens.Login} />
    </Stack.Navigator>
  );
};

export default Unauthenticated;
