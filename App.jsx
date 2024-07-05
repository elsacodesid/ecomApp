import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/SCREEN/HomeScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/SCREEN/ProductDetailsScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
const MyHomeStack = () => {
return (
  <Stack.Navigator screenOptions={{headerShown: false}}
  initialRouteName='PRODUCT_DETAILS'
  >
    <Stack.Screen name="HOME" component={HomeScreen} />
    <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
  </Stack.Navigator>
)
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#E96E6E',
        }}>
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({size, focused, color}) => {
              return <Entypo name={'home'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={Home}
          options={{
            tabBarIcon: (size, color) => {
              return <MaterialIcons name={'reorder'} size={25} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="CART"
          component={Home}
          options={{
            tabBarIcon: (size, color) => {
              return (
                <MaterialCommunityIcons name={'cart'} size={25} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={Home}
          options={{
            tabBarIcon: (size, color) => {
              return <FontAwesome6 name={'user'} size={25} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
