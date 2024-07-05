import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
const imageUrl =
  'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

const sizes = ['S', 'M', 'L', 'XL'];
const colors = [
  '#91A1B0',
  '#811D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <Image source={{uri: imageUrl}} style={styles.coverImage} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Winter Coat</Text>
          <Text style={[styles.title, styles.price]}>$69.99</Text>
        </View>
        {/* size container */}

        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map(size => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedSize(size)}
                style={styles.sizeValueContainer}>
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize == size && {color: '#E55B5B'},
                  ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={[styles.title, styles.colorText]}>Color</Text>
        <View style={styles.colorContainer}>
          {colors.map(color => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedColor(color)}
                style={[
                  styles.circleBorder,
                  selectedColor == color && {
                    borderColor: color,
                    borderWidth: 2,
                  },
                ]}>
                <View style={[styles.circle, {backgroundColor: color}]} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: '100%',
    height: 400,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#444444',
    fontWeight: '500',
  },
  price: {
    color: '#4D4C4C',
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorText: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',

    marginHorizontal: 10,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 20,
  },
  circleBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 24,
    marginHorizontal: 5,
  },
});
