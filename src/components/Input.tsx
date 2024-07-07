import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import theme from '../theme';
import {InputProps} from '../types';

const Input = ({
  label,
  labelProps,
  containerProps,
  variant = 'filled',
  ...rest
}: InputProps) => {
  return (
    <View {...containerProps}>
      <Text style={styles.text} {...labelProps}>
        {label}
      </Text>
      <View style={styles.spacer} />
      <TextInput
        style={variant === 'filled' ? theme.filledInput : theme.outlinedInput}
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
});
