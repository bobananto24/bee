import React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Menubar} from '../../actions';
import {HeaderComponent} from '../../constants';
import {styles} from '../../styles';
export const ProfilePage = () => {
  const dispatch = useDispatch();
  const openedOnce = useSelector(states => states.TOGGLE.openedOnce);

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <HeaderComponent
        name={'PROFILE'}
        onPress={() => {
          openedOnce ? dispatch(Menubar()) : null;
          dispatch(Menubar());
        }}
        source={require('../../assets/images/hamburger.png')}
      />
      <View style={[styles.subContainer]}>
        <Text>ProfilePage</Text>
      </View>
    </View>
  );
};
