import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Account, Authentication, Username} from '../../actions';
import {
  CustomButton,
  HeaderComponent,
  InputField,
  ErrorText,
  CustomToast,
} from '../../constants';
import {styles} from '../../styles';
import {localStyles} from './localStyles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthApi} from '../../services/API';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    // .email('Please enter valid email')
    .required('Name is Required'),
  password: yup
    .string()
    // .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const Login = props => {
  const dispatch = useDispatch();
  const onLogin = async (email, password) => {
    var data = {
      email: email,
      password: password,
    };
    let res = await AuthApi(data);
    if (res.status != 200)
      return CustomToast(true, res.response.data.message || 'Server Error');
    const token = JSON.stringify(res.data.data);
    await AsyncStorage.setItem('_locker', token);
    await AsyncStorage.setItem('_user', JSON.stringify(email));
    dispatch(Username(email));
    dispatch(Account(res.data.data));
    dispatch(Authentication(true));
    CustomToast(true, 'Login Successful');
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <HeaderComponent name={'LOGIN'} />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={val => {
          onLogin(val.email, val.password);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          isValid,
          touched,
        }) => (
          <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={[styles.subContainer, styles.centre]}>
                <InputField
                  title={'Email'}
                  name="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={
                    errors.email && touched.email
                      ? styles.errorTextInput
                      : styles.TextInput
                  }
                />
                {errors.email && touched.email && (
                  <ErrorText text={errors.email} />
                )}
                <InputField
                  title={'Password'}
                  secureTextEntry={true}
                  name="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  style={
                    errors.password && touched.password
                      ? styles.errorTextInput
                      : styles.TextInput
                  }
                />
                {errors.password && touched.password && (
                  <ErrorText text={errors.password} />
                )}
                <View style={localStyles.rightText}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text>Forgot Password ?</Text>
                  </TouchableOpacity>
                </View>

                <CustomButton
                  title="LOGIN"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
      <View
        style={{
          flexDirection: 'row',
          padding: RFValue(10),
          position: 'absolute',
          bottom: 0,
        }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              color: 'black',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
