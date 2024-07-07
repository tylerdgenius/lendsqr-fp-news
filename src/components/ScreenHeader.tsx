import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  default as FontAwesome5Icon,
  default as FontAwesomeIcon,
} from 'react-native-vector-icons/FontAwesome5';
import {ScreenHeaderProps} from '../types';
import StyledComponents from '../styledComponents';

const ScreenHeader = ({
  title,
  description,
  backButton,
  backButtonType = 'back',
}: ScreenHeaderProps) => {
  const {top} = useSafeAreaInsets();

  const iconSize = RFValue(15);

  return (
    <View style={[{paddingTop: top + RFValue(10)}]}>
      {backButton && (
        <TouchableOpacity onPress={backButton}>
          {backButtonType === 'back' ? (
            <FontAwesomeIcon name="arrow-left" size={iconSize} />
          ) : (
            <FontAwesome5Icon name="close" size={iconSize} />
          )}
        </TouchableOpacity>
      )}
      {title && (
        <StyledComponents.Text variant="bold" style={styles.title}>
          {title}
        </StyledComponents.Text>
      )}
      {description && (
        <StyledComponents.Text style={styles.description}>
          {description}
        </StyledComponents.Text>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(20),
  },
  description: {},
});
