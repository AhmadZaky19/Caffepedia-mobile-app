import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#EAEDED',
  },
  header: {
    height: 100,
    backgroundColor: 'red',
    marginBottom: 15,
  },
  imgHeader: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },

  listCont: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 15,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation:10,
  },
  date: {
    marginBottom: 10,
    width: '100%',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
  },
  total: {
    flexDirection: 'row',
    width: '100%',
  },
  left: {
    marginRight: 5,
    width: '35%',
  },
  right: {
    paddingLeft: 10,
    width: '65%',
  },
  bold: {
    fontWeight: 'bold',
  },
  delete: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 15,
    padding: 5,
  },
});
