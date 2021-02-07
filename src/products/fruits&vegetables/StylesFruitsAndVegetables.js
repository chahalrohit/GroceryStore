import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // mainFlat: {
  //     justifyContent: 'center',
  //     alignContent: 'center',
  //     alignItems: 'center',
  //     marginLeft:14,
  // },
  txt: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 12,
    marginTop: 10,
  },
  card: {
    alignItems: 'center',
    height: 240,
    width: 150,
    borderColor: '#f2f2f2',
    marginLeft: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  image: {
    height: 130,
    width: 130,
    resizeMode: 'center',
  },
  button: {
    marginLeft: 40,
    alignItems: 'center',
    backgroundColor: '#fc8f00',
    borderRadius: 20,
    height: 30,
    width: 75,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 7,
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
    fontSize:22,
  },
  delButton: {
    marginTop: 10,
    marginLeft: 90,
    fontSize: 20,
  },
  delIcon: {
    fontSize: 22,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
    marginTop: 15,
    color: '#9898a8',
  },
  plusButton: {
    marginTop: 15,
    marginLeft: 30,
  },
  editIcon: {
    fontSize: 15,
    marginRight: 120,
  },
  img: {
    height: 18,
    width: 20,
    marginTop: 15,
    marginLeft: 30,
  },
  flatView: {
    flex: 1,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200,
  },
  modalView: {
    margin:20,
    backgroundColor: '#e6f2ff',
    borderRadius: 20,
    alignItems: 'center',
    height: 250,
    width: 250,
  },
  modalInput: {
    width: 180,
    borderBottomWidth: 1,
    height: 36,
    marginTop: 20,
  },
  saveModal: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    borderRadius: 20,
  },
  modalClose: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    marginTop: 10,
    textAlign: 'center',
  },
  cross: {
    marginTop: 10,
    marginLeft: 40,
  },
});
