import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {TextProps} from '../types';

const Text = ({style, variant = 'regular', ...rest}: TextProps) => {
  const variants = {
    regular: styles.regular,
    light: styles.light,
    bold: styles.bold,
    medium: styles.medium,
    semibold: styles.semibold,
  };

  return <RNText style={[variants[variant], style]} {...rest} />;
};

export default Text;

const styles = StyleSheet.create({
  regular: {
    fontFamily: 'Quicksand-Regular',
  },
  light: {
    fontFamily: 'Quicksand-Light',
  },
  bold: {
    fontFamily: 'Quicksand-Bold',
  },
  medium: {
    fontFamily: 'Quicksand-Medium',
  },
  semibold: {
    fontFamily: 'Quicksand-SemiBold',
  },
});
