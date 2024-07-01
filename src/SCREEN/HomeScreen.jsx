import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';

const categories = ["Trending Now", "All", "New", "Men's", "Women's"]
const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
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
      data={categories} 
      renderItem={({item}) => <Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />} 
      keyExtractor={(item) => item}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
    
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
