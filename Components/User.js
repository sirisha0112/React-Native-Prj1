import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const User = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC/items.json")
            .then((obj) => obj.json())
            .then((res) => setData(res))
    })
    return (
        <ScrollView>
            <Header />
            <View>
                <TextInput style={styles.search} placeholder="Search..."
                // value={searchQuery}
                // onChangeText={handleSearch}
                />
                {data.map((items) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.content}>{items.name}</Text>
                            <Image source={{ uri: items.url }} style={styles.image} />
                            {/* <Text style={styles.title}>{items.id}</Text> */}
                            <TouchableOpacity style={[styles.btn1, { backgroundColor: 'lightgreen' }]}>
                                <Text style={{ color: 'black' }}>EDIT</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btn1, { backgroundColor: '#fc6560' }]}>
                                <Text style={{ color: 'black' }}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
            <Footer />
        </ScrollView>

    );
}

export default User;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#75fffd',
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
    },
    content: {
        fontSize: 24,
        // textAlign: 'center'
    },
    image: {
        width: '90%',
        height: 200,
        borderRadius: 20
    },
    header: {
        position: 'relative',
        backgroundColor: 'pink',
        padding: 10,
        zIndex: 10
    },
    btn1: {
        borderWidth: 1,
        width: "90%",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: "70%",
        borderRadius: 10,
        margin: 5
    }
})