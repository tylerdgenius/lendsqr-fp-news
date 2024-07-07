import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../redux';
import Base from './Base';
import Unauthenticated from './Unauthenticated';

const Entry = () => {
  const {user} = useAppSelector(state => state.userReducer);

  console.log({user});

  return (
    <NavigationContainer>
      {user.email || user.id ? <Base /> : <Unauthenticated />}
    </NavigationContainer>
  );
};

export default Entry;
