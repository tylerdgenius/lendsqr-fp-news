import React from 'react';
import {Keyboard, StyleSheet, TouchableOpacity} from 'react-native';
import {KeyboardDismissWrapperProps} from '../types';

const KeyboardDismiss = ({children}: KeyboardDismissWrapperProps) => {
  return (
    <TouchableOpacity
      style={styles.flexed}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableOpacity>
  );
};

export default KeyboardDismiss;

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
});
