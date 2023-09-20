//API Calls Using Axios

import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Photo from './Photo';
import axios from 'axios';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const fetchPhotos = () => {
        //GET Method
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10")
 //By using axios data will convert into JSON
            .then(response => setPhotos(response.data))
    }

    const addPhoto = () => {
        //POST Method
        const requestBody = {
            title
        }
        axios.post("https://jsonplaceholder.typicode.com/photos", {
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (response) {
                    requestBody.id = photos.length + 1;
                    requestBody.url = "https://source.unsplash.com/random/200*200"
                    let updatedPhotos = [...photos, requestBody]
                    setPhotos(updatedPhotos);
                }
            })
    }

    const updatePhoto = () => {
        //PUT Method
        const requestBody = {
            title
        }
        axios.put("https://jsonplaceholder.typicode.com/photos/" + selectedId, {
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (response) {
                    let updatedPhotos = [...photos]
                    let index = updatedPhotos.findIndex((post) => post.id === selectedId);
                    updatedPhotos[index] = { ...updatedPhotos[index], ...requestBody };
                    setPhotos(updatedPhotos);
                    setSelectedId(null);
                    setTitle("");
                }
            })
    }

    const deletePhoto = (id) => {
        //DELETE Method
        axios.delete("https://jsonplaceholder.typicode.com/photos" + id)
            .then(response => {
                if (response) {
                    let updatedPhotos = [...photos]
                    let index = updatedPhotos.findIndex((photo) => photo.id === id);
                    updatedPhotos.splice(index, 1);
                    setPhotos(updatedPhotos);
                }
            })
    }

    const selectedPhoto = (requestBody) => {
        setTitle(requestBody.title);
        setSelectedId(requestBody.id)
    }

    useEffect(() => {
        fetchPhotos();
    }, [])
    return (
        <View>
            <Text style={styles.heading}>PHOTOS</Text>
            <View style={styles.form}>
                <TextInput placeholder='Enter title' style={styles.input} value={title}
                    onChangeText={(text) => setTitle(text)} />
                <TouchableOpacity style={styles.button} onPress={selectedId === null ? addPhoto  : updatePhoto}>
                    <Text style={styles.add}>{selectedId === null ? "ADD" : "UPDATE"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList data={photos}
                    renderItem={({ item }) => <Photo {...item} selectedPhoto={selectedPhoto} deletePhoto={deletePhoto} />}
                    ItemSeparatorComponent={() => (<View style={styles.border} />)}>
                </FlatList>
            </View>
        </View>
    ) 
}

export default Photos;

const styles = StyleSheet.create({
    heading: {
        backgroundColor: "pink",
        fontSize: 40,
        color: "white",
        textAlign: "center",
        padding: 4
    },
    border: {
        borderWidth: 0.5,
        borderColor: "pink"
    },
    input: {
        borderWidth: 1,
        padding: 4,
        margin: 4
    },
    button: {
        backgroundColor: "black",
        padding: 4
    },
    add: {
        textAlign: "center",
        fontSize: 16,
        color: "white"
    },
    form: {
        padding: 10,
        margin: 10
    },
    list: {
        height: 500
    }
})