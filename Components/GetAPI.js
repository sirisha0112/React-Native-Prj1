import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

const YourComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(filtered);
  },[searchText, data]);

  const renderItem = ({ item }) => (
    <View>
      <Text style={style.title}>{item.id}.{item.title}</Text>
      
    </View>
  );

  return (
    <View>
        <Text style={style.heading}>Api Data</Text>
      <TextInput
        placeholder="Search here...."
        style={style.input}
        value={searchText}
        onChangeText={text => setSearchText(text)
        }
      />
      <FlatList
        data={filteredData}
        style={style.container}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default YourComponent;

style={
    title:{
        fontSize:20,
        fontWeight:"bold",
        margin:4,
        padding:5,
    },
    container:{
        height:600,
    },
    input:{
        borderWidth:1,
        margin:10,
        padding:10,
        borderRadius:10,
        fontSize:20,
    },
    heading:{
        fontSize:20,
        textAlign:"center",
    }
}