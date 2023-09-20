import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backbtn}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.title}>About</Text>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.title}>Help</Text>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: 'pink',
    paddingHorizontal: 16
  },
  backbtn: {
    color: 'white'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})