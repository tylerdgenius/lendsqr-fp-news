import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NewsDetails = () => {
  return (
    <View style={styles.container}>
      <Text>NewsDetails</Text>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
