import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {API} from './src/constants';
import store from './src/store';
import {styles} from './src/styles';
import Toast from 'react-native-toast-message';

axios.defaults.baseURL = API.BASE_URL;
axios.interceptors.request.use(
  async function (successfulReq) {
    try {
      let parsedTok = JSON.parse(await AsyncStorage.getItem('_locker'));
      successfulReq.headers['Authorization'] = `Bearer ${parsedTok.token}`;
    } catch (e) {}

    return successfulReq;
  },
  function (error) {
    return Promise.reject(error);
  },
);
const reduxProvider = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <App />
        <Toast ref={ref => Toast.setRef(ref)} />
      </SafeAreaView>
    </Provider>
  );
};
export default reduxProvider;
