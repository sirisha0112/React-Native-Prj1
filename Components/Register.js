import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput as MaterialTextInput } from 'react-native-paper';

//Used text input from react-native paper

const Register = ({ setDisplay }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnfrmpassword, setCnfrmPassword] = useState("")
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cnfrmPasswordError, setCnfrmPasswordError] = useState("")
    // const [error, setError] = useState({ field: '', message: '' });

    const isValidEmail = (email) => {
        const emailRegex = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
        return emailRegex.test(email);
    };

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

        if (password != cnfrmpassword) {
            setCnfrmPasswordError("Confirm Password mismatched")
        }

        else {
            setDisplay("Login");
        }
    };

    // const onSubmit = () => {
    //     let loginError = { field: '', message: '' };
    //     if (email === '') {
    //         loginError.field = 'email';
    //         loginError.message = 'Email is required';
    //         setError(loginError);
    //     }
    //      else if (isValidEmail != email) {
    //         loginError.field = 'email';
    //         loginError.message = 'Invalid email address';
    //         setError(loginError);
    //         return;
    //     } 
    //     else if (password === '') {
    //         loginError.field = 'password';
    //         loginError.message = 'Password is required';
    //         setError(loginError);
    //     } 
    //     else if (cnfrmpassword === '') {
    //         loginError.field = 'cnfrmpassword';
    //         loginError.message = 'Please confirm password';
    //         setError(loginError);
    //     } 
    //     else if (password != cnfrmpassword) {
    //         loginError.field = 'cnfrmpassword';
    //         loginError.message = 'Password mismatched';
    //         setError(loginError);
    //     } else {
    //         setDisplay("Login");
    //     }
    // };

    return (
        <View style={styles.page}>
            <Text style={styles.heading}>Register Form</Text>
            <View style={styles.inputs}>
                <MaterialTextInput placeholder='Email'
                    mode="outlined"
                    label="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <Text style={{ color: 'red' }}>{emailError}</Text>
                {/* {error.field === "email" && (
                    <Text style={styles.error}>{error.message}</Text>
                )} */}
                <MaterialTextInput placeholder='Password'
                    mode="outlined"
                    label="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
                <Text style={{ color: 'red' }}>{passwordError}</Text>
                {/* {error.field === "password" && (
                    <Text style={styles.error}>{error.message}</Text>
                )} */}
                <MaterialTextInput placeholder='Confirm Password'
                    mode="outlined"
                    label="Confirm Password"
                    secureTextEntry={true}
                    style={styles.input}
                    value={cnfrmpassword}
                    onChangeText={value => setCnfrmPassword(value)}
                />
                <Text style={{ color: 'red' }}>{cnfrmPasswordError}</Text>
                {/* {error.field === "cnfrmpassword" && (
                    <Text style={styles.error}>{error.message}</Text>
                )} */}
            </View>
            <TouchableOpacity>
                <Text style={styles.btn} onPress={handleSubmit} > Register</Text>
            </TouchableOpacity>
            <View style={styles.account}>
                <Text onPress={() => setDisplay("Login")}>Already have an account? / Login </Text>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b4f2fa'
    },
    heading: {
        fontSize: 40,
        color: 'blue',
        textDecorationLine: 'underline'
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
    },
    error: {
        color: 'red'
    }
})