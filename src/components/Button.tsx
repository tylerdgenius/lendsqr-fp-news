import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ButtonProps} from '../types';

const Button = ({children, textProps, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
      {typeof children === 'string' ? (
        <Text style={styles.text} {...textProps} />
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
  text: {
    fontWeight: '600',
  },
});
