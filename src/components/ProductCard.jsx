import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/model1.png')}
        style={styles.coverImage}
      />
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {

  flex: 1,
  alignItems: "center"
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    // padding: 2,
  },
  coverImage: {
    height: 256,
    width: "95%",
    borderRadius: 20,
    marginVertical: 10,
  },
});
