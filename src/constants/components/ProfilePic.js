import React from 'react';
import {Image, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
export const ProfilePic = props => {
  return (
    <Image
      source={{uri: 'https://picsum.photos/200/200?random=2'}}
      style={{
        width: RFValue(80),
        height: RFValue(80),
        borderRadius: RFValue(50),
        margin: RFValue(10),
        marginVertical: RFValue(20),
      }}
    />
  );
};
