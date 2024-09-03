import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Header, Slider} from './src/components';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Slider data={['1', '2', '3', '4']} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
