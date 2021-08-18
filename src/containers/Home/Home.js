import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SideMenu from 'react-native-side-menu-updated';
import {useSelector, useDispatch} from 'react-redux';
import {
  Authentication,
  Completed,
  LogoutToggle,
  NavigateTo,
  Pending,
} from '../../actions';
import {DrawerField, ProfilePic} from '../../constants';
import {styles} from '../../styles';
import HomePage from './HomePage';
import {localStyles} from './localStyles';
import {ProfilePage} from './ProfilePage';
export const Home = props => {
  const currentPage = useSelector(states => states.TOGGLE.currentPage);
  const dispatch = useDispatch();
  const isOpen = useSelector(states => states.TOGGLE.menubar);
  const username = useSelector(states => states.AUTH.username);

  var drawerContent = (
    <View style={localStyles.shadowWithoutElevation}>
      <View style={[styles.drawer]}>
        <TouchableOpacity activeOpacity={0.5} style={styles.drawerCard}>
          <ProfilePic />
          <Text style={styles.drawerLabelText}>{username.toUpperCase()}</Text>
        </TouchableOpacity>
        <DrawerField
          label="Dashboard"
          onPress={() => {
            dispatch(NavigateTo('Dashboard'));
            dispatch(Completed(false));
            dispatch(Pending(false));
          }}
        />
        <DrawerField
          label="Completed"
          onPress={() => {
            dispatch(NavigateTo('Completed'));
            dispatch(Completed(true));
            dispatch(Pending(false));
          }}
        />
        <DrawerField
          label="Pending"
          onPress={() => {
            dispatch(NavigateTo('Pending'));
            dispatch(Completed(false));
            dispatch(Pending(true));
          }}
        />
        {/* <DrawerField
          label="Profile"
          onPress={() => {
            dispatch(NavigateTo('Profile'));
          }}
        /> */}

        <TouchableOpacity
          style={localStyles.logout}
          onPress={() => {
            AsyncStorage.clear();
            dispatch(LogoutToggle());
            dispatch(Authentication(false));
          }}>
          <Text style={styles.drawerLabelText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SideMenu
      overlayColor="rgba(0,0,0,0.1)"
      menu={drawerContent}
      isOpen={isOpen}
      disableGestures={true}>
      {currentPage == 'Dashboard' && <HomePage />}
      {currentPage == 'Completed' && <HomePage />}
      {currentPage == 'Pending' && <HomePage />}
      {currentPage == 'Profile' && <ProfilePage />}
    </SideMenu>
  );
};
