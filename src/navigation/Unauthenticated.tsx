import React from 'react';
import Screens from '../screens';
import {Stack} from './lib';

const Unauthenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Screens.Login} />
      <Stack.Screen name="SignupScreen" component={Screens.Signup} />
    </Stack.Navigator>
  );
};

export default Unauthenticated;
