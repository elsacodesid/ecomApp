import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';


const ProductCard = ({item, handleLiked }) => {
  // const isLiked = true
  // const [isLiked, setIsLiked] = useState(false);
  const navigation  = useNavigation()
  return (
    <TouchableOpacity onPress={()=> {
      navigation.navigate("PRODUCT_DETAILS", { item })
    }} style={styles.container}>
      <Image
        source={{uri:item.image}}
        style={styles.coverImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <TouchableOpacity
        onPress={() =>{handleLiked(item)}}
        style={styles.heartContainer}>
        {item?.isLiked ? (
          <AntDesign name={'heart'} size={20} color={'#E55B5B'} />
        ) : (
          <AntDesign name={'hearto'} size={20} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: '45%',
    marginTop: 10,
    marginHorizontal: '2.5%',
    position: 'relative',
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
  heartContainer: {
    height: 34,
    width: 34,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    position: 'absolute',
    top: 15,
    right: 8,
  },
});
