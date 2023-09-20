import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput as MaterialTextInput } from 'react-native-paper';

const Login = ({ setDisplay }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // const handleCheckEmail = (text) => {
    //   let re = /\S+@\S+\.\S+/;
    //   let regex = (/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(val)) 
    //   {
    //     console.log('passed');
    //   }
    //   setEmail(text);
    //   if(re.test(text) || regex.test(text)){
    //     setCheckValidEmail(false);
    //   } else {
    //     setCheckValidEmail(true);
    //   }
    // };

    // const checkPasswordValidity = value => {
    //     const isNonWhiteSpace = /^\S*$/;
    //     if(!isNonWhiteSpace.test(value)) {
    //         return 'Password must not contain whitespaces';
    //     }

    //     const isContainsUpperCase = /^(?=.*[A-Z]).*$/;
    //     if(!isContainsUpperCase.test(value)) {
    //         return 'Password must have atleast one Uppercase character';
    //     } 

    //     const isContainsLowerCase = /^(?=.*[a-z]).*$/;
    //     if(!isContainsLowerCase.test(value)) {
    //         return 'Password must have atleast one Lowercase character';
    //     }

    //     const isContainsNumber = /^(?=.*[0-9]).*$/;
    //     if(!isContainsNumber.test(value)) {
    //         return 'Password must contain atleast one Digit';
    //     }

    //     const isValidLength = /^.{8,12}$/;
    //     if(!isValidLength.test(value)) {
    //         return 'Password must be 8-12 Characters long';
    //     }
    //     return null;
    // };

    // const onSubmit = () => {
    //     let loginError = { field: '', message: '' };
    //     if (email === '') {
    //         loginError.field = 'email';
    //         loginError.message = 'Email is required';
    //         setError(loginError);
    //     } else if (password === '') {
    //         loginError.field = 'password';
    //         loginError.message = 'Password is required';
    //         setError(loginError);
    //     } else {
    //         setError({ field: '', message: '' });
    //         alert("Login successfull");
    //         setDisplay("User");
    //     }
    // };

    const handleSubmit = () => {
        setEmailError('');
        setPasswordError('');

        if (email === '') {
            setEmailError("Email is required");
            return;
        }

        if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

        if (password === '') {
            setPasswordError("Password is required");
            return;
        }
        else {
            setDisplay("User");
        }
        // console.log('Form submitted:', { email, password });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
        return emailRegex.test(email);
    };

    // const onSubmit = () => {
    //     const checkPassword = checkPasswordValidity(password)
    //     if (!checkPassword) {
    //         alert("Success Login")
    //         setDisplay("User");
    //     } else {
    //         alert(checkPassword)
    //     }}

    return (
        <View style={styles.page}>
            <Text style={styles.heading}>LogIn to user account</Text>
            <View style={styles.inputs}>
                <MaterialTextInput placeholder='Email'
                    mode="outlined"
                    label="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={{ color: 'red' }}>{emailError}</Text>
                {/* {checkValidEmail ? (<Text>Wrong Email Format</Text>) : (<Text> </Text>)} */}
                {/* {error.field === "email" && ( */}
                {/* )} */}
                <MaterialTextInput placeholder='Password'
                    mode="outlined"
                    label="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Text style={{ color: 'red' }} >{passwordError}</Text>
                {/* {error.field === "password" && ( */}
                {/* )} */}
            </View>
            <TouchableOpacity>
                <Text style={styles.btn} onPress={handleSubmit}> LogIn</Text>
            </TouchableOpacity>
            <View style={styles.account}>
                <Text onPress={() => setDisplay("Register")}>Create new account </Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4f2fa'
    },
    heading: {
        fontSize: 30,
        color: 'blue'
    },
    input: {
        elevation: 1,
        width: 300,
        margin: 6,
    },
    btn: {
        backgroundColor: "pink",
        width: 350,
        padding: 10,
        margin: 4,
        borderRadius: 100,
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    },
    inputs: {
        margin: 30
    },
    account: {
        padding: 20
    }
})