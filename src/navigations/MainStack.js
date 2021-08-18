import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../containers/Home';

const StackMain = createStackNavigator();

const MainStack = () => {
  return (
    <StackMain.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StackMain.Screen name="Home" component={Home} />
    </StackMain.Navigator>
  );
};
export default MainStack;
