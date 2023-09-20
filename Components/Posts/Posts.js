 //API Calls Using Fetch

import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Post from './Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const fetchPosts = () => {
        //GET Method
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10" , {
            method: "GET"
        })
            .then((response) => response.json())
            .then(data => setPosts(data))
    }

    const addPost = () => {
        //POST Method
        const requestBody = {
            title, //title : title is written as title
            body: description
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then(data => {
                if (data) {
                    requestBody.id = posts.length + 1;
                    let updatedPosts = [...posts, requestBody]
                    setPosts(updatedPosts);
                    setSelectedId(null);
                    setTitle("");
                    setDescription("");
                }
            })
    }

    const updatePost = () => {
        //PUT Method
        const requestBody = {
            title,
            body: description
        }
        fetch("https://jsonplaceholder.typicode.com/posts/" + selectedId, {
            method: "PUT",
            body: JSON.stringify(requestBody)
        })
            .then((response) => response.json())
            .then(data => {
                if (data) {
                    let updatedPosts = [...posts]
                    let index = updatedPosts.findIndex((post) => post.id === selectedId);
                    updatedPosts[index] = { ...updatedPosts[index], ...requestBody };
                    setPosts(updatedPosts);
                    setSelectedId(null);
                    setTitle("");
                    setDescription("");
                }
            })
    }

    const deletePost = (id) => {
        //DELETE Method
        fetch("https://jsonplaceholder.typicode.com/posts" + id, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(data => {
                if (data) {
                    let updatedPosts = [...posts]
                    let index = updatedPosts.findIndex((post) => post.id === id);
                    updatedPosts.splice(index, 1);
                    setPosts(updatedPosts);
                }
            })
    }

    const selectedPost = (requestBody) => {
        setTitle(requestBody.title);
        setDescription(requestBody.description);
        setSelectedId(requestBody.id)
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <View>
            <Text style={styles.heading}>POSTS</Text>
            <View style={styles.form}>
                <TextInput placeholder='Enter title' style={styles.input} value={title}
                    onChangeText={(text) => setTitle(text)} />
                <TextInput placeholder='Enter description'
                    style={styles.input}
                    value={description}
                    onChangeText={(text) => setDescription(text)} />
                <TouchableOpacity style={styles.button} onPress={selectedId === null ? addPost : updatePost}>
                    <Text style={styles.add}>{selectedId === null ? "ADD" : "UPDATE"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <FlatList data={posts}
                    renderItem={({ item }) => <Post {...item} selectedPost={selectedPost} deletePost={deletePost} />}
                    ItemSeparatorComponent={() => (<View style={styles.border} />)}>
                </FlatList>
            </View>
        </View>
    ) 
}

export default Posts;

const styles = StyleSheet.create({
    heading: {
        backgroundColor: "black",
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