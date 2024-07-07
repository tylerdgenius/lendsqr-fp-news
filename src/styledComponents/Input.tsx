import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {InputProps} from '../types';
import Text from './Text';

const Input = ({
  label,
  labelProps,
  containerProps,
  variant = 'filled',
  ...rest
}: InputProps) => {
  return (
    <View {...containerProps}>
      <Text variant="regular" style={styles.text} {...labelProps}>
        {label}
      </Text>
      <View style={styles.spacer} />
      <TextInput
        style={variant === 'filled' ? styles.filledInput : styles.outlinedInput}
        placeholderTextColor="#c7c7c7"
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  spacer: {
    marginTop: RFValue(5),
  },
  text: {
    fontWeight: '600',
  },
  filledInput: {
    backgroundColor: '#f5f5f5',
    color: '#777',
    borderRadius: RFValue(5),
    borderWidth: 0.5,
    borderColor: '#c7c7c8',
    paddingHorizontal: RFValue(15),
  },
  outlinedInput: {},
});
