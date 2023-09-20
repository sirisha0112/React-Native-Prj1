import { View, Button, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const Post = ({ id, userId, title, body, selectedPost, deletePost }) => {

    return (
        <View style={styles.post}>
            <Text style={styles.heading}>{id}.{title}</Text>
            <Text style={styles.body}>{body}</Text>
                <Button title="EDIT" onPress={() => selectedPost({ id, title, description: body })} />
                <Button title="DELETE" color="red" onPress={() => deletePost(id)} />
        </View>
    )
}

export default Post;

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
    post: {
        padding: 10,
        margin: 10
    }
})