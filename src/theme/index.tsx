import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  filledInput: {
    backgroundColor: '#f5f5f5',
    color: '#777',
    borderRadius: RFValue(5),
    borderWidth: 0.5,
    borderColor: '#c7c7c8',
    paddingHorizontal: RFValue(15),
  },
  outlinedInput: {},
});

export default styles;
