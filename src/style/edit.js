import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    // justifyContent: 'center',
    backgroundColor: '#212F3D',
    paddingLeft: 20,
    marginBottom: 15,
    height: 120,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  goBack: {
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    padding: 20,
  },
  imgPicker: {
    width: '50%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pick: {
    marginLeft: 10,
    backgroundColor: '#7DCEA0',
    padding: 6,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  pic: {
    marginBottom: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginLeft: 10,
    borderRadius: 10,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  catName: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  item: {
    padding: 7,
    backgroundColor: '#7DCEA0',
    borderRadius: 6,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#212F3D',
  },
  add: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  loading: {
    top: 250,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 22222,
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
  btn: {
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
