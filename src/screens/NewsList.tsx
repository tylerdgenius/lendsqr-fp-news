import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NewsList = () => {
  return (
    <View style={styles.container}>
      <Text>NewsList</Text>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
