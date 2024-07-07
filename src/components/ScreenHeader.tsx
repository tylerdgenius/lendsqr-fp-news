import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  default as FontAwesome5Icon,
  default as FontAwesomeIcons,
} from 'react-native-vector-icons/FontAwesome5';
import {ScreenHeaderProps} from '../types';

const ScreenHeader = ({
  title,
  description,
  backButton,
  backButtonType = 'back',
}: ScreenHeaderProps) => {
  const {top} = useSafeAreaInsets();

  const iconSize = RFValue(10);

  return (
    <View style={[{paddingTop: top + RFValue(10)}]}>
      {backButton && (
        <TouchableOpacity onPress={backButton}>
          {backButtonType === 'back' ? (
            <FontAwesomeIcons name="close" size={iconSize} />
          ) : (
            <FontAwesome5Icon name="arrow-left" size={iconSize} />
          )}
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(30),
  },
  description: {},
});
