import {News} from './lib';

export type RootStackParamsList = {
  LoginScreen: undefined;
  SignupOneScreen: undefined;
  SignupTwoScreen: {
    email: string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
  };
  NewsListScreen: undefined;
  NewsDetailsScreen: News;
};
