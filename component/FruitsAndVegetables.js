import React, { useState, Component } from 'react';
import {
    View,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { Button, Text, Card, Icon } from 'native-base';
import styles from './StylesFruitsAndVegetables';

class FruitsAndVegetables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: '1',
                    name: 'Kiwi Fruit',
                    price: '₹160',
                    imageURL:
                        'http://www.pngmart.com/files/1/Kiwi-Fruit-PNG-Transparent-Image.png',
                },
                {
                    key: '2',
                    name: 'Apple',
                    price: '₹75',
                    imageURL:
                        'http://www.pngmart.com/files/1/Apple-Fruit-Transparent-PNG.png',
                },
                {
                    key: '3',
                    name: 'Tomato',
                    price: '₹25',
                    imageURL: 'https://pngimg.com/uploads/tomato/tomato_PNG12587.png',
                },
                {
                    key: '4',
                    name: 'Lemon',
                    price: '₹48',
                    imageURL:
                        'http://www.pngmart.com/files/13/Green-Lemon-PNG-Transparent-Image.png',
                },
                {
                    key: '5',
                    name: 'Orange',
                    price: '₹80',
                    imageURL:
                        'https://www.searchpng.com/wp-content/uploads/2018/12/Orange-Fruit-PNG-Images.png',
                },
                {
                    key: '6',
                    name: 'Cauliflower',
                    price: '₹25',
                    imageURL:
                        'https://www.pngarts.com/files/3/Cauliflower-PNG-Transparent-Image.png',
                },
            ],
        };
    }

    removeItem = (key) => {

        let filteredData = this.state.data.filter(item => item.key !== key);
        this.setState({ data: filteredData });
        // alert(index);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={styles.txt}>Fruits and Vegetables</Text>
                    <Icon type="FontAwesome" name="th-large" style={styles.icon} />
                </View>

                <View style={styles.flatView}>
                    <SafeAreaView>
                        <FlatList
                            style={styles.flat}
                            data={this.state.data}
                            renderItem={({ item, index }) => (
                                <View style={styles.main}>
                                    <View style={styles.card}>
                                        <View style={styles.favDel}>
                                            <TouchableOpacity>
                                                <Icon name="heart" type="EvilIcons" style={styles.heart} />
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => this.removeItem(item.key)}
                                                style={styles.deleteBox}>
                                                <Icon name="delete" type="AntDesign" style={styles.delButton} />
                                            </TouchableOpacity>
                                        </View>

                                        <Image
                                            source={{ uri: item.imageURL }}
                                            style={styles.image}
                                        />
                                        <View style={styles.namePrice}>
                                            <Text style={styles.productName}>{item.name}</Text>
                                            <Text style={styles.productPrice}>{item.price}</Text>
                                        </View>
                                        <Button style={styles.button}>
                                            <Text style={styles.text}>ADD</Text>
                                        </Button>
                                    </View>
                                </View>
                            )}
                            numColumns={2}
                        />
                    </SafeAreaView>
                </View>
            </View>
        );
    }
}

export default FruitsAndVegetables;
