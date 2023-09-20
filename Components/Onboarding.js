import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import Register from './Register'
import Login from './Login'
import User from './User'

const slides = [
  {
    key: 1,
    title: 'Dashboard',
    text: 'Description.\nSay something cool',
    image: require('./assets/image1.jpg'),
    backgroundColor: '#f1c2ff',
  },
  {
    key: 2,
    title: 'Authentication',
    text: 'Hey user, Hello',
    image: require('./assets/image1.jpg'),
    backgroundColor: '#f1c2ff',
  },
  {
    key: 3,
    title: 'Get started',
    text: 'Comeon Lets get started',
    image: require('./assets/image1.jpg'),
    backgroundColor: '#f1c2ff',
  }
];

const Onboarding = () => {
  const [showRealApp, setShowRealApp] = useState(false)
  const [display, setDisplay] = useState("Register");
  const _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  const _onDone = () => {
    setShowRealApp(true);
  }
  if (showRealApp) {
    if (display === "Register") {
      return <Register setDisplay={(text) => setDisplay(text)} />
    } else if (display === "Login") {
      return <Login setDisplay={(text) => setDisplay(text)} />
    } else if (display === "User") {
      return <User setDisplay={(text) => setDisplay(text)} />
    }
  } else {
    return <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />;
  }
}

export default Onboarding;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  image: {
    width: "80%",
    height: "50%",
    margin: 10,
    borderRadius: 30
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
})