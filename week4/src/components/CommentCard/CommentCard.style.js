import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: spacing.tiny,
    borderRadius: spacing.tiny,
    margin: spacing.normal,
    backgroundColor: '#rgba(0,0,0,0.8)'
  },
  text: {
    color: 'gray',
    fontSize: 16,
    margin: 8,
  },
});
