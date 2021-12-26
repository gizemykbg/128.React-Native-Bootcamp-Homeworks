import {StyleSheet} from 'react-native';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    flex: 1,
    borderRadius: spacing.tiny,
    margin: spacing.normal,
    backgroundColor: '#rgba(0,0,0,0.8)',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: spacing.huge,
    color: 'white',
  },
  rate_container: {
    flexDirection: 'row',
  },
  rate: {
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'right',
  },
  brief: {
    marginLeft: spacing.normal,
    color: '#bdbdbd',
    fontWeight: 'bold',
  },
  content_container: {
    flexDirection: 'row',
  },
  genre_container: {
    backgroundColor: '#rgba(0,0,0,0.5)',
    margin: spacing.micro,
    borderRadius: radius.soft,
    padding: spacing.tiny,
  },
  genre_label: {
    fontSize: spacing.normal,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
});
