import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  CustomButton,
  HeaderComponent,
  InputField,
  ErrorText,
  SCREEN,
  CustomToast,
} from '../../constants';
import {styles} from '../../styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import {SignupApi} from '../../services/API';

const loginValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  password: yup
    .string()
    // .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const SignUp = props => {
  const dispatch = useDispatch();
  const onSignup = async (email, password, phone) => {
    var data = {
      email: email,
      password: password,
      phone: phone,
    };

    let res = await SignupApi(data);
    if (res.status != 200) return CustomToast(false, 'Network Error');
    props.navigation.goBack();
    CustomToast(true, res.data.message);
  };
  return (
    <KeyboardAvoidingView
      style={[styles.container]}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <HeaderComponent
        onPress={() => props.navigation.goBack()}
        name={'SIGN UP'}
      />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          password: '',
          name: '',
          company: '',
        }}
        onSubmit={val => {
          onSignup(val.name, val.password, val.mobile || null);
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
                  title={'Name'}
                  name="name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  style={
                    errors.name && touched.name
                      ? styles.errorTextInput
                      : styles.TextInput
                  }
                />
                {errors.name && touched.name && (
                  <ErrorText text={errors.name} />
                )}

                <InputField
                  title={'Password'}
                  secureTextEntry={true}
                  name="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  autoCapitalize="none"
                  style={
                    errors.password && touched.password
                      ? styles.errorTextInput
                      : styles.TextInput
                  }
                />
                {errors.password && touched.password && (
                  <ErrorText text={errors.password} />
                )}

                <InputField
                  title={'Mobile Number (*optional)'}
                  name="mobile"
                  onChangeText={handleChange('mobile')}
                  value={values.mobile}
                  keyboardType="number-pad"
                  style={styles.TextInput}
                />

                <CustomButton
                  title="SIGN UP"
                  onPress={handleSubmit}
                  disabled={!isValid}
                />
              </View>
            </TouchableWithoutFeedback>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
