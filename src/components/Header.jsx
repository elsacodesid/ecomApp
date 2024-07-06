import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';

const Header = ({isCart}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate("HOME_STACK")} style={styles.menuContainer}>
        {isCart ? (
          <Ionicons name={'chevron-back'} color={'#E96E6E'} size={24} />
        ) : (
          <Image source={require('../assets/menu.png')} style={styles.menu} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}

      <Image source={require('../assets/pfp.png')} style={styles.pfp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  menuContainer: {
    backgroundColor: '#ffffff',
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    height: 20,
    weight: 20,
  },
  pfp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  myCart: {
    fontSize: 28,
    color: 'black',
  },
});
