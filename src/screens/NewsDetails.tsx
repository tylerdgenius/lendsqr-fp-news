import React from 'react';
import {Image, Linking, StyleSheet, View} from 'react-native';
import {NewsDetailsScreenProps} from '../types';
import Components from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import StyledComponents from '../styledComponents';
import moment from 'moment';
import Utils from '../utils';

const NewsDetails = ({navigation, route}: NewsDetailsScreenProps) => {
  const {
    urlToImage,
    title,
    content,
    description,
    url,
    publishedAt,
    author,
    source,
  } = route.params;

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
        <StyledComponents.Text variant="bold" style={styles.title}>
          {title}
        </StyledComponents.Text>
        <View style={styles.divider} />
        <StyledComponents.Text style={styles.content}>
          {content ? content : description}
        </StyledComponents.Text>
      </View>
      <View style={styles.bottomSection}>
        <StyledComponents.Text style={styles.source}>
          Source:
        </StyledComponents.Text>
        <StyledComponents.Text style={styles.sourceDetails}>
          {source.name}
        </StyledComponents.Text>
        <View style={styles.spacer} />
        <View style={styles.dateWrapper}>
          <StyledComponents.Text style={styles.date}>
            {moment(publishedAt).format('MMM Do, YYYY')}
          </StyledComponents.Text>

          <View style={styles.nameWrapper}>
            <StyledComponents.Text style={styles.name}>
              {Utils.getInitials(author)}
            </StyledComponents.Text>
          </View>
        </View>
        <View style={styles.spacer} />
        <StyledComponents.Button onPress={() => Linking.openURL(url)}>
          Read Full Article
        </StyledComponents.Button>
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
  content: {
    fontSize: RFValue(14),
  },
  nameWrapper: {
    backgroundColor: '#ba000d',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  name: {
    color: 'white',
  },
  date: {
    fontWeight: '700',
    color: '#bdbdbd',
  },
  source: {
    color: '#bdbdbd',
  },
  sourceDetails: {
    fontWeight: '700',
  },
  dateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
