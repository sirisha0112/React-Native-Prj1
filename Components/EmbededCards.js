import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const EmbededCards = () => {
  return (
    <View>
      <Text style={style.headingtext}>Embeded Cards</Text>
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

export default EmbededCards;


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