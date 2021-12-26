import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
  },
  button_container: {
    flexDirection: 'row',
  },
  /*  list_container: {
    backgroundColor: '#becfdb',
  },
  add_container: {
    margin: 5,
    position: 'relative',
  }, */
  seperator: {
    borderWidth: 1,
    borderColor: '#0077c2',
  },
});
