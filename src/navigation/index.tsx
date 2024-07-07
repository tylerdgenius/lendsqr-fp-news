import analytics from '@react-native-firebase/analytics';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useRef} from 'react';
import {useAppSelector} from '../redux';
import {RootStackParamsList} from '../types';
import Base from './Base';
import Unauthenticated from './Unauthenticated';

const Entry = () => {
  const {user} = useAppSelector(state => state.userReducer);

  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<NavigationContainerRef<RootStackParamsList>>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}>
      {user.email || user.id ? <Base /> : <Unauthenticated />}
    </NavigationContainer>
  );
};

export default Entry;
