import {
  TextInputProps,
  TextProps as RNTextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

export type InputProps = {
  label: string;
  variant?: 'filled' | 'outline';
  labelProps?: RNTextProps;
  containerProps?: ViewProps;
} & TextInputProps;

export type ButtonProps = {
  variant?: 'filled' | 'outline';
  textProps?: RNTextProps;
  children?: React.ReactNode;
} & TouchableOpacityProps;

export type TextProps = {
  variant?: 'bold' | 'medium' | 'light' | 'regular' | 'semibold';
} & RNTextProps;
