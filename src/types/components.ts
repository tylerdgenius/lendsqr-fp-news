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
  textProps?: TextProps;
  children?: React.ReactNode;
} & TouchableOpacityProps;
