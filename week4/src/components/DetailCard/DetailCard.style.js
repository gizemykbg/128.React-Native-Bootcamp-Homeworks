import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  detailcard: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  subtitle: {
    fontSize: 16,
    margin: 5,
  },
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').height / 2,
  },
  imageBorder: {flex: 1, overflow: 'hidden'},
  posterImage: {flex: 1},
  genre: {
    backgroundColor: '#37474f',
    margin: 4,
    borderRadius: 8,
    padding: 3,
    color: '#e0e0e0',
    fontSize: 12,
  },
  rate_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
  },
});
