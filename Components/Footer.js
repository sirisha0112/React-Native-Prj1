import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>All Rights are Reserved to the User</Text>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#333',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
});
