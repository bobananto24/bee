import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {styles} from '../../styles';
export const HorizontalCard = props => {
  return (
    <TouchableOpacity style={[styles.horizontalCard, styles.shadowProp]}>
      <View>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.subTitle}</Text>
      </View>
      <Image
        source={require('../../assets/images/back.png')}
        style={{
          width: RFValue(10),
          height: RFValue(10),
          borderRadius: RFValue(5),
          margin: RFValue(5),
          transform: [{rotate: '180deg'}],
        }}
      />
    </TouchableOpacity>
  );
};
