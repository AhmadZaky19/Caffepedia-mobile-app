import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: 200,
    backgroundColor: 'black',
  },
  image: {
    marginTop: 10,
    zIndex: 9999,
    alignSelf: 'center',
    height: 180,
    width: 180,
    backgroundColor: 'white',
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },
  userImg: {
    position: 'absolute',
    zIndex: -1,
    height: 170,
    width: 170,
    borderRadius: 170,
    resizeMode: 'cover',
  },
  camera: {
    top: '150%',
    left: 40,
  },
  form: {
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: '80%',
  },
  btn: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 10,
  },
  save: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  edit: {
    padding: 8,
    backgroundColor: 'white',
    top: 150,
    left: 100,
    position: 'absolute',
    borderRadius: 20,
  },
  loading: {
    top: 200,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 3333,
  },
  overlayCont: {
    top: -10,
    alignItems: 'center',
  },
  promp: {
    width: '50%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    alignSelf: 'center',
    marginTop: 20,
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
    backgroundColor: 'black',
  },

  str: {
    color: 'white',
    fontWeight: 'bold',
  },
});
