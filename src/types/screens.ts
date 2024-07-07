import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from './navigation';

export type SignupOneScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'SignupOneScreen'
>;

export type SignupTwoScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'SignupOneScreen'
>;
