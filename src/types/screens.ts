import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from './navigation';

export type SignupOneScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'SignupOneScreen'
>;

export type SignupTwoScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'SignupTwoScreen'
>;

export type NewsListScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'NewsListScreen'
>;

export type NewsDetailsScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'NewsDetailsScreen'
>;

export type LoginProps = NativeStackScreenProps<
  RootStackParamsList,
  'LoginScreen'
>;
