import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NewsDetailsScreenProps} from '../types';
import Components from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import StyledComponents from '../styledComponents';

const NewsDetails = ({navigation, route}: NewsDetailsScreenProps) => {
  const {urlToImage, title, content, description} = route.params;

  return (
    <View style={styles.container}>
      <Components.ScreenHeader backButton={() => navigation.goBack()} />
      <View style={styles.spacer} />
      <Image
        source={{
          uri: urlToImage
            ? urlToImage
            : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.spacer} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.divider} />
        <Text>{content ? content : description}</Text>
      </View>
      <View style={styles.bottomSection}>
        <StyledComponents.Button>Read Full Article</StyledComponents.Button>
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: RFValue(12),
  },
  image: {
    resizeMode: 'cover',
    height: RFValue(220),
    borderRadius: RFValue(20),
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: '600',
  },
  spacer: {
    marginTop: RFValue(15),
  },
  divider: {
    borderWidth: 0.7,
    borderColor: '#c5c5c5',
    marginVertical: RFValue(10),
  },
  bottomSection: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: RFValue(30),
  },
});
