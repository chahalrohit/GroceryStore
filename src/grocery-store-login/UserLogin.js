import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  LogBox,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon, Button } from 'native-base';
import styles from './Styles';
import SnackBar from 'react-native-snackbar-component';
LogBox.ignoreAllLogs();

// functional Component
const UserLogin = ({ navigation }) => {
  // This is hooks for checkbox
  const [isSelected, setSelection] = useState(false);

  //For Email
  const [email, setEmail] = useState('');

  //For password
  const [password, setPassword] = useState('');

  // For showing password
  const [passHide, showPass] = useState(true);
  const ShowPassword = () => showPass(false);

  //For snackbar
  const [isEmailVisible, setEmailVisible] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);

  //when password not valid
  const [isValid, setValid] = useState(false);

  //when password valid
  const [ispassValid, setpassValid] = useState(false);

  //
  const onToggleEmail = () => setEmailVisible(!isEmailVisible);
  const onTogglePass = () => setPassVisible(!isPassVisible);
  const onNotValid = () => setValid(!isValid);

  //for password conditions
  
  const validPassword = () => setpassValid(!ispassValid);

  //On Dismiss
  const onDismissEmail = () => setEmailVisible(false);
  const onDismissPass = () => setPassVisible(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  //check password condition
  const validatePass = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return regex.test(password);
  };

  const onSubmit = () => {
    if (!validateEmail(email)) {
      onToggleEmail();
    } else if (password == '') {
      onTogglePass();
    }else if(!validatePass(password)){
      onNotValid();
    }else{
      validPassword();
    }
  };

  // Everthing inside return is react Element
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.circle}>
          <Text style={styles.text}>Grocery{'\n'}Store</Text>
          {/* <Text style={styles.text}>Store</Text> */}
        </View>

        <View style={styles.sectionStyle}>
          <Icon style={styles.inputIcon} name="user" type="Feather" />

          <TextInput
            style={styles.inputs}
            value={email}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.sectionStyle}>
          <TouchableOpacity>
            <Icon
              style={styles.inputIcon}
              name="locked"
              type="Fontisto"
              onPress={() => { ShowPassword() }}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={passHide}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.checkView}>
          <CheckBox
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelection}
          />

          <Text style={styles.remember}>Remember Me</Text>

          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>

        <View >
          <LinearGradient
            style={styles.signIn}
            colors={['#5fa3ff', '#528bfa', '#446efe']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1.5 }}>
            <TouchableHighlight>
              <Button
                style={styles.signinButton}
                block
                onPress={() => {
                  onSubmit(password);
                }}>
                <Text style={styles.signintext}>Sign In</Text>
              </Button>
            </TouchableHighlight>
          </LinearGradient>
        </View>

        {/* Snackbar messages */}
        <SnackBar
          visible={isEmailVisible}
          onDismiss={onDismissEmail}
          duration={100}
          style={styles.snackbar}
          textMessage="Invalid Email"
          autoHidingTime={2000}
          backgroundColor="#ffddcc"
          messageColor="#2566ff"
        />

        <SnackBar
          visible={isValid}
          duration={100}
          style={styles.snackbar}
          textMessage="Password not valid"
          autoHidingTime={2000}
          backgroundColor="#ffddcc"
          messageColor="#2566ff"
        />

        <SnackBar
          visible={isPassVisible}
          onDismiss={onDismissPass}
          textMessage={"Required:-\nminimum 6 characters\none number\none lowercase\none uppercase\none special character"}
          autoHidingTime={3000}
          backgroundColor="#ffddcc"
          messageColor="#2566ff"
        />

        <SnackBar
          visible={ispassValid}
          textMessage="Password Valid"
          style={styles.snackbar}
          autoHidingTime={2000}
          backgroundColor="#ffddcc"
          messageColor="#2566ff"
        />

        <View>
          <Text style={styles.line}> ────────────── OR ──────────────</Text>
        </View>

        <View style={styles.socialStyle}>
          <View>
            <TouchableHighlight>
              <FontAwesome.Button
                name="facebook-f"
                color="white"
                style={styles.iconButton}></FontAwesome.Button>
            </TouchableHighlight>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.socialText}> Login with Facebook</Text>
          </View>
        </View>

        <View style={styles.socialStyle}>
          <View>
            <TouchableHighlight>
              <FontAwesome.Button
                name="google"
                color="#fe7979"
                backgroundColor="white"
                style={styles.iconButton}></FontAwesome.Button>
            </TouchableHighlight>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.socialText}>Login with Gmail</Text>
          </View>
        </View>

        <View style={styles.socialStyle}>
          <View>
            <TouchableHighlight>
              <FontAwesome.Button
                name="twitter"
                backgroundColor={'whitel'}
                color="#05a8f4"
                style={styles.iconButton}></FontAwesome.Button>
            </TouchableHighlight>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.socialText}>Login with Twitter</Text>
          </View>
        </View>

        <View style={styles.registerView}>
          <Text style={styles.dont}>Don't have an account?</Text>

          <TouchableOpacity>
            <Text
              style={styles.register}
              onPress={() => navigation.navigate('Sign Up')}>
              {' '}
              Register Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserLogin;
