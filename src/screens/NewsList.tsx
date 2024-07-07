import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import Wrappers from '../wrappers';
import Components from '../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {NewsListScreenProps} from '../types';
import hooks from '../hooks';

const EmptyNewsList = () => {
  return <></>;
};

const NewsList = ({navigation}: NewsListScreenProps) => {
  const {trigger, data} = hooks.useGetNews();

  useEffect(() => {
    trigger();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrappers.KeyboardDismiss>
      <View style={styles.container}>
        <Components.ScreenHeader title="Headlines" />
        <View style={styles.spacer} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.news}
          renderItem={({item}) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('NewsDetailsScreen', item);
                  }}>
                  <Components.NewsCard {...item} />
                </TouchableOpacity>
                <View style={styles.spacer} />
              </>
            );
          }}
          ListEmptyComponent={EmptyNewsList}
        />
      </View>
    </Wrappers.KeyboardDismiss>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(15),
    paddingBottom: RFValue(20),
    backgroundColor: '#eeeeee',
  },
  spacer: {
    marginBottom: RFValue(20),
  },
});
