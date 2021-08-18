import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootStack = props => {
  const isLogged = useSelector(states => states.AUTH.isLogged);

  return isLogged ? <MainStack /> : <AuthStack />;
};
export default RootStack;
