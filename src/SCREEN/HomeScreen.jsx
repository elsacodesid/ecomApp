import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Icon name={'facebook'} size={25} />
      <AntDesign name={"arrowright"} size={50} color={"red"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
