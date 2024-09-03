import React, {FC, useRef} from 'react';
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {Card} from '../Card';

export const Slider: FC<{
  data: string[];
}> = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const {width: windowWidth} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Animated.ScrollView
          horizontal={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={1}>
          {data.map((item, imageIndex) => {
            return <Card key={imageIndex} />;
          })}
        </Animated.ScrollView>
        <View style={styles.indicatorContainer}>
          {data.map((image, imageIndex) => {
            const backgroundColor = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: ['#999999', '#03CB83', '#999999'],
              extrapolate: 'clamp',
            });
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 20, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, {backgroundColor, width}]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#E9E9E9',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
