import React from 'react';
import {View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../Common';
const ErrorText = props => {
  return (
    <>
      <Text style={{fontSize: RFValue(12), color: COLORS.RED}}>
        {props.text}
      </Text>
    </>
  );
};
export default ErrorText;
