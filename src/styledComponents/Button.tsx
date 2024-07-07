import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonProps} from '../types';

const Button = ({
  children,
  textProps,
  variant = 'filled',
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={variant === 'filled' ? styles.filledButton : styles.outlinedButton}
      {...rest}>
      {typeof children === 'string' ? (
        <Text
          style={variant === 'filled' ? styles.filledText : styles.outlinedText}
          {...textProps}>
          {children}
        </Text>
      ) : (
        <>{children}</>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  spacer: {
    marginTop: RFValue(5),
  },
  filledText: {
    fontWeight: '600',
    color: 'white',
  },
  outlinedText: {
    fontWeight: '600',
  },
  filledButton: {
    backgroundColor: '#ba000d',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RFValue(15),
    borderRadius: RFValue(5),
  },
  outlinedButton: {},
});
