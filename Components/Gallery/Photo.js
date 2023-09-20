import { View, Button, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Photo = ({ id, url, title, selectedPhoto, deletePhoto }) => {

    return (
        <View style={styles.Photo}>
            <Image source={{uri:url}} style={styles.image}/>
            <Text style={styles.heading}>{title}</Text>
            <Button title="EDIT" onPress={() => selectedPhoto({ id, title })} />
            <Button title="DELETE" color="red" onPress={() => deletePhoto(id)} />
        </View>
    )
}
 
export default Photo;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: "black",
        padding: 4
    },
    body: {
        fontSize: 14,
        padding: 3
    },
    image: {
        height: 200,
        margin:10
    }
})