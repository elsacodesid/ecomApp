import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { CartContext } from '../context/CartContext';

const CartScreen = ({}) => {
  const {cart, totalPrice, deleteItem} = useContext(CartContext)
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>

      <FlatList
        data={cart}
    
        renderItem={({item}) => <CartCard item={item} deleteItem={deleteItem}/>}
        ListFooterComponent={
          <>
            <View style={styles.priceContainer}>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalPrice}</Text>
              </View>
              <View style={styles.priceAndTitle}>
                <Text style={styles.text}>Shipping:</Text>
                <Text style={styles.text}>$00.00</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text
                style={[styles.text, {color: 'black'}, {fontWeight: '700'}]}>
                ${totalPrice}
              </Text>
            </View>
          </>

        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10
        }}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    marginBottom: 20,
  },
  priceContainer: {
    marginTop: 40,
  },
  priceAndTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    color: '#757575',
    fontSize: 18,
  },
  divider: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#E96E6E',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
  },
});
