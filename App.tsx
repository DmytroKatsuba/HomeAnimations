import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>
        Home
      </Text>
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
