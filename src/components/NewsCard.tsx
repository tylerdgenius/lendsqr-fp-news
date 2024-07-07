import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {News} from '../types';
import {RFValue} from 'react-native-responsive-fontsize';
import {truncateText} from 'text-shortener';
import moment from 'moment';

const NewsCard = ({
  title,
  urlToImage,
  publishedAt,
  description,
  author,
}: News) => {
  const getInitials = (_author: string) => {
    if (!author) return '-';

    const text = author.split(' ');

    return `${text[0].slice(0)[0]}${text[1] ? text[1].slice(0)[0] : ''}`;
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: urlToImage
            ? urlToImage
            : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
        }}
        height={200}
        borderRadius={RFValue(10)}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{truncateText(title, 58)}</Text>
        <View style={styles.textSpacer} />
        <Text style={styles.description}>
          {truncateText(description ? description : '', 100)}
        </Text>
        <View style={styles.textSpacer} />

        <View style={styles.bottomSection}>
          <Text style={styles.date}>
            {moment(publishedAt).format('MMM Do, YYYY')}
          </Text>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{getInitials(author)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: RFValue(10),
    padding: RFValue(5),
  },
  textContainer: {
    padding: RFValue(15),
  },
  text: {
    fontSize: RFValue(18),
    fontWeight: '600',
  },
  textSpacer: {
    marginTop: RFValue(5),
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    color: '#bdbdbd',
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
});