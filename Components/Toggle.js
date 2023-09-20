import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const EmbeededCards = () => {
    const [show,setShow] = useState(true);
  return (
    <View>
      <ScrollView horizontal={true} style={style.container}>
        <View style={[style.card,style.cardElevated]}>
            <Text>card1</Text>
        </View>
        <View style={[style.card,style.cardElevated]}>
            <Text>card2</Text>
        </View>
        <View style={[style.card,style.cardElevated]}>
            <Text>card3</Text>
        </View>
        <View style={[style.card,style.cardElevated]}>
            <Text>card4</Text>
        </View>
        <View style={[style.card,style.cardElevated]}>
            <Text>card5</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

export default EmbeededCards;


const style={
    headingtext:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,
    },
    
    container:{
        padding:8,
    },
    card:{
        alignItems:"center",
        justifyContent:"center",
        width:100,
        height:100,
        fontSize:16,
        color:"white",
        margin:8,
    },
    cardElevated:{
        backgroundColor:"grey"
    }
}