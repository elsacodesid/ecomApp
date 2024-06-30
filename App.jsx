import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/SCREEN/HomeScreen';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={Home} />
        <Tab.Screen name="CART" component={Home} />
        <Tab.Screen name="ACCOUNT" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
