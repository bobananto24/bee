import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {styles} from '../../styles';
const InputField = props => {
  return (
    <View>
      <Text style={styles.TextInputHeader}>{props.title}</Text>
      <View style={styles.TextInputView}>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          placeholder={props.title}
          style={props.style}
          value={props.value}
          onChangeText={props.onChangeText}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
        />
      </View>
    </View>
  );
};
export default InputField;
