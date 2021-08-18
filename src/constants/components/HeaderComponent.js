import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles';

export const HeaderComponent = props => {
  return (
    <View style={[styles.header, styles.shadowProp]}>
      <Text style={styles.headerText}>{props.name}</Text>
      {props.onPress ? (
        <TouchableOpacity
          style={styles.headerLeftIconView}
          onPress={props.onPress}>
          <Image
            style={styles.headerLeftIcon}
            source={props.source || require('../../assets/images/back.png')}
          />
        </TouchableOpacity>
      ) : null}
      {props.rightButton ? (
        <TouchableOpacity
          style={styles.headerRightIconView}
          onPress={props.rightButton}>
          <Image
            style={[styles.headerRightIcon, props.style]}
            source={
              props.source2 || require('../../assets/images/add-circle.png')
            }
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
