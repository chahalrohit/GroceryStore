/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import GroceryStore from './src/GroceryStore';
import UserLogin from './src/grocery-store-login/UserLogin';
import RegisterNow from './src/grocery-store-registration/RegisterNow';
import Products from './src/products/Products';
import LoginPage from './src/login/LoginPage';
import Check from './src/CheckBox'
import NativeCard from './src/native-base/NativeCard';
import FruitsAndVegetables from './src/products/fruits&vegetables/FruitsAndVegetables';
import FoodDeliveryApp from './src/food-delivery-app/FoodDeliveryApp';
import UploadImage from './src/ImagePicker/UploadImage';

import {name as appName} from './app.json';
import VerticalFlatList from './src/products/sunlight_3d/VerticalFlatList';
import HorizontalFlatList from './src/products/flatlist/HorizontalFlatList';

AppRegistry.registerComponent(appName, () => FruitsAndVegetables);
