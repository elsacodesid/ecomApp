import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';

const categories = ['Trending Now', 'All', 'New', "Men's", "Women's"];

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = item => {
    const likedProducts = products.map(prod => {
      if (prod.id === item.id) {
        return {
          ...prod,
          isLiked: true
        };
      }
      return prod;
    });
    setProducts(likedProducts);
  };
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      {/* Input Container */}
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={'search'} size={26} color={'#c0c0c0'} />
        </View>
        <TextInput style={styles.textInput} placeholder="Search"></TextInput>
      </View>
      {/* Category Section */}
      <FlatList
        style={styles.categories}
        data={categories}
        renderItem={({item}) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      {/* Product list */}
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <ProductCard item={item} handleLiked={handleLiked} />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categories: {
    flexDirection: 'row',
    height: 80,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  iconContainer: {
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
  },
  productList: {
    marginTop: 10,
    paddingBottom: 50,
  },
  row: {
    justifyContent: 'space-between',
  },
});
