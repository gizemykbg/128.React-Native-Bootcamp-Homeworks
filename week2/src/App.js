import React from 'react';

import {SafeAreaView, View, StyleSheet, Dimensions} from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <List />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#e6f7ff',
  },
});

export default App;
