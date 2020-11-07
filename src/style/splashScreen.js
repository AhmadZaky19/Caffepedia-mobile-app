import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DBDD',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%',
    alignSelf: 'center',
    height: 200,
    width: '80%',
    flexDirection: 'row',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  },
});
