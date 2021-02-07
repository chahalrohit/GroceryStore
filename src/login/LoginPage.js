// import react from react
import React, { Component } from 'react';

// Import custom StyleSheet file
import styles from './Styles';

// import react components from react native
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

// Create class component
class LoginPage extends Component {
    // initialize state using constructor
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            showpassword: true,
        };
    }

    // use of render because of class component
    render() {
        // everything that in return is react
        return (
            <View style={styles.container}>
                {/* add image to screen */}
                <Image
                    style={styles.img}
                    source={require('../../images/react.png')} />

                <TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        dense
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />



                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={this.state.pass}
                        onChangeText={(pass) => this.setState({ pass })}
                    />
     
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgot}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={styles.txt}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.txt1}>
                    <Text>{this.state.email}</Text>
                    <Text>{this.state.pass}</Text>
                </View>
            </View>
        );
    }
}

export default LoginPage; // expose the HelloWorld component to other modules
