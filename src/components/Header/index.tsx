import React from 'react';
import {View, Text, Image} from 'react-native';
import avatar from '../../assets/images/Avatar.png';
import bell from '../../assets/images/bell.png';

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingVertical: 16,
        paddingHorizontal: 10,
      }}>
      <View style={{width: 30, height: 30}}>
        <Image
          source={avatar}
          style={{
            maxWidth: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Общий балланс</Text>
        <Text>≈$15,499.99</Text>
      </View>
      <View style={{width: 30, height: 30}}>
        <Image
          source={bell}
          style={{
            maxWidth: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    </View>
  );
};
