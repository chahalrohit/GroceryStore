import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import UserLogin from './grocery-store-login/UserLogin';
import RegisterNow from './grocery-store-registration/RegisterNow';
import Products from './products/Products';
import HorizontalFlatList from './products/flatlist/HorizontalFlatList';
import VerticalFlatList from './products/flatlist/VerticalFlatList';
import GridFlatList from './products/flatlist/GridFlatList';
import FruitsAndVegetables from './products/fruits&vegetables/FruitsAndVegetables';
import FoodDeliveryApp from './food-delivery-app/FoodDeliveryApp';

const Stack = createStackNavigator();

const GroceryStore=() =>{

  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={UserLogin} />
        <Stack.Screen name="Sign Up" component={RegisterNow} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Horizontal FlatList" component={HorizontalFlatList} />
        <Stack.Screen name="Vertical FlatList" component={VerticalFlatList} />
        <Stack.Screen name="Grid FlatList" component={GridFlatList} />
        <Stack.Screen name="Fruits and Vegetables" 
        component={FruitsAndVegetables} 
        options={{title:"Groceries or Products",
      headerStyle:{
        borderWidth:1,
      }}}
        />
        <Stack.Screen name="Food Delivery" component={FoodDeliveryApp} />
        
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

export default GroceryStore;
