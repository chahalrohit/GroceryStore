import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import styles from './VStyles';
import flatListData from './flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
    render() {     
        return (    
            <Swipeout>   
            <View style={{
                flex: 1,
                flexDirection:'column',                                
            }}>            
                <View style={{
                        flex: 1,
                        flexDirection:'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: '#d9d9d9'
                }}>            
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    >

                    </Image>
                    <View style={{
                            flex: 1,
                            flexDirection:'column',   
                            height: 100                 
                        }}>            
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                    </View>              
                </View>
                <View style={{
                    height: 1,
                    backgroundColor:'white'                            
                }}>
            
                </View>
          </View>
            </Swipeout> 
        );
            
    };
}

export default class BasicFlatList extends Component {
    render() {
      return (
        <View style={styles.main}>
            <FlatList 
                data={flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >
            </FlatList>
        </View>
      );
    }
}