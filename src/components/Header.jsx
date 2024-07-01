import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {isNativePlatformSupported} from 'react-native-screens/lib/typescript/core';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Image source={require('../assets/menu.png')} style={styles.menu} />
   
      </View>
      <Image source={require('../assets/pfp.png')} style={styles.pfp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 20
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
});
