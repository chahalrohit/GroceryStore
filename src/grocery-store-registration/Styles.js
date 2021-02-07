import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    circle: {
        justifyContent: 'center',
        color: '#668cff',
        fontSize: 28,
        marginTop:-40,
        marginBottom:40,
        alignItems: 'center',
        height: 120,
        width: 120,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#e0e0d1',
        marginLeft: 120,
    },
    text: {
        color: '#2566ff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    inputs: {
        flex: 1,
        marginLeft: 15,
    },
    sectionStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        height: 45,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 15,
        borderRadius: 10,
    },
    signUp: {
        backgroundColor: '#2566ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 5,
    },
    signintext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    dont: {
        fontWeight: 'bold',
    },
    register: {
        color: '#668cff',
        fontWeight: 'bold',
    },
    registerView: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 60,
    },
   
})