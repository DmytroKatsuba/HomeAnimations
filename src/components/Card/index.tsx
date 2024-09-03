import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Card = () => {
  const {width: windowWidth} = useWindowDimensions();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => console.log('press')}
      style={{
        width: windowWidth,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 0},
        marginVertical: 14,
      }}>
      <View
        style={{
          marginHorizontal: 10,
          flex: 1,
        }}>
        <LinearGradient
          end={{x: 0.75, y: 0.5}}
          start={{x: 0.1, y: 0.5}}
          colors={['#f5e1c8', '#f1bd7d', '#F7931A']}
          style={styles.linearGradientTop}>
          <Text style={styles.buttonText}>Bitcoin</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#f5e1c8', '#f4b86e', '#f8b667']}
          end={{x: 0.75, y: 0.5}}
          start={{x: 0.1, y: 0.5}}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  linearGradientTop: {
    paddingLeft: 15,
    paddingTop: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    margin: 10,
    color: '#010101',
    backgroundColor: 'transparent',
  },
});
