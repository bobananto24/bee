import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ForgotPassword, Login} from '../containers/Authentication';
import SignUp from '../containers/Authentication/SignUp';

const StackAuth = createStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackAuth.Screen name="Login" component={Login} />
      <StackAuth.Screen name="SignUp" component={SignUp} />
      <StackAuth.Screen name="ForgotPassword" component={ForgotPassword} />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
