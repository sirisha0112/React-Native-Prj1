import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import Toggle from './Toggle'
import GetAPI from './GetAPI';

const Data = () => {
    const [show, setShow] = useState(false);
  return (
    <View>
    <Button  style={{fontSize:30}} title="Show / Hide Data" onPress={()=>setShow(!show)}/>
      {
        show ? <Toggle /> : null 
      }
      <GetAPI />
    </View>
  )
}

export default Data;

style={
    btn:{
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
    },
    btnText:{
        color:"white",
        fontSize:30,
        margin:5,
        padding:10,
    },
}