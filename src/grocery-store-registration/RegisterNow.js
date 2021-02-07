import React, { Component } from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';

const RegisterNow=({ navigation })=>{
        return (
            <View style={Styles.container}>

                <View style={Styles.circle}>
                    <Text style={Styles.text}>Grocery</Text>
                    <Text style={Styles.text}>Store</Text>
                </View>

                <View style={Styles.sectionStyle}>
                    <TextInput style={Styles.inputs} placeholder="First Name" />
                </View>

                <View style={Styles.sectionStyle}>
                    <TextInput style={Styles.inputs} placeholder="Last Name" />
                </View>

                <View style={Styles.sectionStyle}>
                    <TextInput style={Styles.inputs} placeholder="Email" />
                </View>

                <View style={Styles.sectionStyle}>
                    <TextInput style={Styles.inputs} placeholder="Password" secureTextEntry={true} />
                </View>

                <View style={Styles.sectionStyle}>
                    <TextInput style={Styles.inputs} placeholder="Confirm Password" secureTextEntry={true} />
                </View>

                <View>
                <LinearGradient
                    style={Styles.signUp}
                    colors={['#5fa3ff', '#528bfa', '#446efe']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1.5 }}>
                    <TouchableOpacity>
                        <Text style={Styles.signintext}>Sign Up</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            <View style={Styles.registerView}>
                <Text style={Styles.dont}>Already Have an account?</Text>

                <TouchableOpacity>
                    <Text style={Styles.register} onPress={()=>navigation.navigate('Sign In')}> Sign In</Text>
                </TouchableOpacity>
            </View>

            </View>
        );
    }

export default RegisterNow;
