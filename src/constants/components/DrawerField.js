import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from '../../styles';
import {COLORS} from '../Common';
export const DrawerField = props => {
  const currentPage = useSelector(states => states.TOGGLE.currentPage);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.drawerLabelView,
        {
          backgroundColor:
            currentPage == props.label ? COLORS.BACKGROUND_DARK : null,
        },
      ]}>
      <Text style={styles.drawerLabelText}>{props.label}</Text>
    </TouchableOpacity>
  );
};
