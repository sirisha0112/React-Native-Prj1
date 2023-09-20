import React from 'react'
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters', 'Must contain UpperCase characters' , /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).required('Password is required'),
});

const LogInPage = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => Alert}
    >
      {({ values, handleChange, handleSubmit, errors, setFieldTouched, isValid, touched }) => (
        <View>
          {/* <TextInput
            placeholder="Name"
            onChangeText={handleChange('name')}
            value={values.name}
          />
          {touched.name && errors.name && <Text>{errors.name}</Text>} */}

          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            value={values.email}
            onBlur={()=>setFieldTouched('email')}
          />
          {touched.email && errors.email && <Text style={{color:'red'}}>{errors.email}</Text>}

          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
            onBlur={()=>setFieldTouched('password')}
            secureTextEntry
          />
          {touched.password && errors.password && <Text style={{color:'red'}}>{errors.password}</Text>}

          {/* <Button title="Submit" onPress={handleSubmit} /> */}

    <TouchableOpacity 
    onPress = {() => {}}
    disabled = {!isValid}>
    Submit
    </TouchableOpacity>

        </View>
      )}
    </Formik>
  );
};

export default LogInPage;
