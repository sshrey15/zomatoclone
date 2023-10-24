import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const Hotel = (props) => {
  const restaurant = props.restaurant;

    
  return (
    <View

    style={{
        margin:10,
        
        borderRadius:10,

        


    }}
   
    >
        <Image 

        style={{
           
            width:"100%",
            borderRadius:10,
            aspectRatio:3/2,
           
        
        }}
        
        source={{uri:restaurant.featured_image}} 
     
        />
       
       
    </View>
  )
}

export default Hotel

const styles = StyleSheet.create({})