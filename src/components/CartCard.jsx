import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const image =
  'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/qichw3wrcioebkvzudib.png';
const CartCard = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.coverImage} />
      <View style={styles.cardContent}>
        <Text>Jacket Jeans</Text>
        <Text>$89.99</Text>
      </View>
      <Text>CartCard</Text>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
     flexDirection: "row",
    marginVertical: 10,
  },
  coverImage: {
    height: 125,
    width: 94,
  },
  cardContent: {
    flex: 1
  },
});
