import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';

const deviceHeight = Dimensions.get('window').height / spacing.min;

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    marginTop: deviceHeight / 1.4,
    marginHorizontal: spacing.normal,
    marginBottom: 0,
  },
});
