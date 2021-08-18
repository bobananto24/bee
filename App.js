import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigations';
import {styles} from './src/styles';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReAuthApi} from './src/services/API';
import {Account, Authentication, Username} from './src/actions';
import {CustomToast} from './src/constants';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      let parsedTok = JSON.parse(await AsyncStorage.getItem('_locker'));
      let username = JSON.parse(await AsyncStorage.getItem('_user'));
      dispatch(Account(parsedTok));
      dispatch(Username(username));
      let res = await ReAuthApi();
      if (res.status != 200)
        return (
          CustomToast(true, res.response.data.message || 'Server Error'),
          AsyncStorage.clear(),
          dispatch(Authentication(false)),
          SplashScreen.hide()
        );
      dispatch(Authentication(true));
      SplashScreen.hide();
    } catch (e) {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
