import React,{Component} from 'react';
import {View,Text,FlatList,Image,SafeAreaView} from 'react-native';
import DATA from './DATA';
import styles from './GridFlatListStyles';

const Item =({item})=>{
        return(
            <View style={styles.view1}>

                <View style={styles.view2}>
                <Image 
                        source={{uri: item.imageURL}}
                        style={styles.image}
                    ></Image>
                    
                    <Text style={styles.text}>
                        {item.name}
                    </Text>
                    
                    </View>

            </View>
        );
    }

  
const GridFlatList =({navigation})=>{
    return (
      <SafeAreaView style={styles.main}>
        <FlatList
          data={DATA}
          renderItem = {({ item }) => <Item item={item}  />}
          keyExtractor={item => item.key}
          numColumns={3}
        />
      </SafeAreaView>
    );
  }

  export default GridFlatList;
