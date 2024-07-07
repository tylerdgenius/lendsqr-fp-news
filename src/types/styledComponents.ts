import {
  TextInputProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';

export type InputProps = {
  label: string;
  variant?: 'filled' | 'outline';
  labelProps?: TextProps;
  containerProps?: ViewProps;
} & TextInputProps;

export type ButtonProps = {
  variant?: 'filled' | 'outline';
  textProps?: TextProps;
  children?: React.ReactNode;
} & TouchableOpacityProps;
