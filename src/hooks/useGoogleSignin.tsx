import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from '../redux';
import Reducers from '../redux/reducers';
import {Alert} from 'react-native';

GoogleSignin.configure({
  webClientId:
    '451998180121-gb4hl5eude66sprua4j1a444hc8adnnb.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

const useGoogleSignin = () => {
  const dispatch = useAppDispatch();

  const handleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken, user} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      auth().signInWithCredential(googleCredential);

      dispatch(
        Reducers.User.actions.updateUser({
          username: user.name!,
          email: user.email,
          id: user.id!,
          pictureUrl: user.photo!,
        }),
      );
    } catch (error) {
      Alert.alert('Error', 'Unable to process request');
    }
  };

  useEffect(() => {
    handleSignin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGoogleSignin;
