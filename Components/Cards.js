
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import EmbeededCards from './EmbeededCards'
import CardsData from './CardsData'

const Cards = () => {
  return (
    <View>
      <Header />
      <Text style={style.headingtext}> Flat Cards</Text>
      <ScrollView>
      <View style={style.container}>
      <View style={[style.card,style.cardOne]}>
            <Text style={style.content}>Card1</Text>
        </View>
        <View style={[style.card,style.cardTwo]}>
            <Text style={style.content}>Card2</Text>
        </View>
        <View style={[style.card,style.cardThree]}>
            <Text style={style.content}>Card3</Text>
        </View>
        <View style={[style.card,style.cardFour]}>
            <Text style={style.content}>Card4</Text>
        </View>
        
    </View>
      </ScrollView>
      <EmbeededCards />
      <CardsData />
    </View>
  )
}

export default Cards;

const style={
    headingtext:{
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal:8,
    },
    container:{
        flex:1,
        flexDirection:"row",
    },
    card:{
        // flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"20%",
        height:100,
        fontSize:16,
        color:"white",
        margin:8,
    },
    cardOne:{
        backgroundColor:"red",
    },
    cardTwo:{
        backgroundColor:"green",
    },
    cardThree:{
        backgroundColor:"blue",
    },
    cardFour:{
        backgroundColor:"brown",
    },
    content:{
        color:"white",
    }
}

