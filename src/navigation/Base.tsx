import React from 'react';
import Screens from '../screens';
import {Stack} from './lib';

const Base = () => {
  return (
    <Stack.Navigator
      initialRouteName="NewsListScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewsListScreen" component={Screens.NewsList} />
      <Stack.Screen name="NewsDetailsScreen" component={Screens.NewsDetails} />
    </Stack.Navigator>
  );
};

export default Base;
