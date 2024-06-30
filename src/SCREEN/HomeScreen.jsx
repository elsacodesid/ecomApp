import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon name={'facebook'} size={25} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
