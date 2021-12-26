import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    maxWidth: '300px',
  },
  inner_container: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#0f1554',
  },
  subtitle: {
    fontWeight: '300',
    color: '#0f1554',
  },
  image: {
    backgroundColor: '#e0e0e0',
    height: deviceSize.height / 6,
    width: ' 100%',
    flexDirection: 'row',
  },
});
