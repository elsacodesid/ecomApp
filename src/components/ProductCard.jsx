import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/model1.png')}
        style={styles.coverImage}
      />
      <Text style={styles.title}>Title</Text>
      <Text style={styles.price}>$19.99</Text>
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
  title: {
    fontSize: 18,
    color: "#4444444",
    fontWeight: "600"
  },
  price: {
    fontSize: 18,
    color: "#9C9C9C",
    fontWeight: "600"
  }
});
