import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {HeaderComponent} from '../../constants';
import {styles} from '../../styles';
const ForgotPassword = props => {
  return (
    <View style={styles.container}>
      <HeaderComponent
        onPress={() => props.navigation.goBack()}
        name={'FORGOT PASSWORD'}
      />
      <View style={styles.subContainer}>
        <Text>Coming Soon ...</Text>
      </View>
    </View>
  );
};

export default ForgotPassword;
