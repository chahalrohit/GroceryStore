import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 12,
        marginTop: 10,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        height: 240,
        width: 150,
        borderColor: '#f2f2f2',
        marginLeft: 5,
        borderRadius: 10,
        resizeMode: "cover",
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'center',
        marginTop: -20,
    },
    button: {
        marginLeft: 40,
        alignItems: 'center',
        backgroundColor: '#fc8f00',
        borderRadius: 20,
        height: 30,
        width: 75,
        marginBottom: 15,
    },
    text: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    namePrice: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        alignItems: 'center',
    },
    productName: {
        flex: 1,
        marginLeft: 9,
        fontWeight: 'bold',
        marginBottom: 25,
    },
    productPrice: {
        marginRight: 9,
        color: '#b3b3b3',
        marginBottom: 25,
    },
    favDel: {
        flexDirection: 'row',
    },
    heart: {
        marginTop: 10,
    },
    delButton: {
        marginTop: 10,
        fontSize: 20,
        marginLeft: 90
    },
    view1: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 40,
        marginTop: 15,
        color: '#9898a8',
    },
    img: {
        height: 18,
        width: 20,
        marginTop: 18,
        marginLeft: 62,
    },
    flatView: {
        flex: 1,
    },
    deleteBox: {
        backgroundColor: "powderblue",
    }
});
