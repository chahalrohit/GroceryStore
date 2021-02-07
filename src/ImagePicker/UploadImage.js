import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { launchCamera, launchImageLibrary, ImagePicker } from 'react-native-image-picker';
import styles from './styles';

const UploadImage = () => {

    return (
        <View style={styles.container}>
            <Button block color="primary" style={styles.button}>
                <Text style={styles.textButton}>Select Image</Text>
            </Button>
        </View>
    );
}

export default UploadImage;