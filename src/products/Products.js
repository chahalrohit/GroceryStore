import * as React from 'react';
import {View, Text,} from 'react-native';
import Styles from './Styles';

const ProductList = ({navigation}) =>{
  return(
    <View style={Styles.main}>
      <Text style={Styles.text} onPress={()=>navigation.navigate('Fruits and Vegetables')}>
        Fruits and Vegetables
      </Text>
      <Text style={Styles.text} onPress={()=>navigation.navigate('Horizontal FlatList')}>
        Horizontal FlatList
      </Text>
      <Text style={Styles.text} onPress={()=>navigation.navigate('Vertical FlatList')}>
        Vertical FlatList
      </Text>
      <Text style={Styles.text} onPress={()=>navigation.navigate('Grid FlatList')}>
        Grid FlatList
      </Text>
    </View>
  );
}

export default ProductList;