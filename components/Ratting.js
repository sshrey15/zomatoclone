import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ratting = (props) => {
    const restaurant = props.restaurant;
  return (
<View style={{
          flexDirection: "row",
          alignItems: "right",
          paddingHorizontal: 11,
          
        
        }}>
        <Text 
        style={{
          fontSize: 20,
          fontWeight: "bold",
          fontWeight: "normal",
          color: "white",
          flexDirection: "column",
          margin: 10,
          textAlign: "right",
          backgroundColor:"green",
          height:25,
          width:30,
          textAlign:"center",
          borderRadius:5,

        }}
          
        >
          {props.props} 
        </Text></View>
  )
}

export default Ratting

const styles = StyleSheet.create({})