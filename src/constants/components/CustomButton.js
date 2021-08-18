import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../../styles';
const CustomButton = props => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.shadowProp]}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
