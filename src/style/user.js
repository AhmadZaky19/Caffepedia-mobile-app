import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    backgroundColor: '#F4D2D2',
    marginBottom: 15,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  userImg: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 140,
  },
  name: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  id: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingTop: 8,
    height: 50,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    marginLeft: 25,
    fontWeight: 'bold',
  },
  overlayCont: {
    top: -10,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  promp: {
    width: '70%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    flexDirection: 'row',
  },
  yes: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: '#A6E0DE',
  },
  no: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: '#F4D2D2',
  },
  str: {
    color: 'white',
    fontWeight: 'bold',
  },
  strno: {
    color: 'black',
    fontWeight: 'bold',
  },
});
