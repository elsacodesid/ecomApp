import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/model2.png')}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.price}>$19.99</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    marginTop: 10,
    marginHorizontal: '2.5%'

  },
  coverImage: {
    height: 256,
    width: '100%',
    borderRadius: 20,
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    color: '#4444444',
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '600',
  },
  content: {
    paddingLeft: 5,
  },
});
