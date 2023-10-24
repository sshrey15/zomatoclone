import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const items = [
    {
        id:"1",
        name:"fastest delivery",
    },
    {
        id:"2",
        name:"rating 4.0+"
    },
    {
        id:"3",
        name:"offers",
    },
    {
        id:"4",
        name:"cuisines",
    },
    {
        id:"5",
        name:"MAX Safety",
    },
    {
        id:"6",
        name:"Pro",
    }
]

const Categories = () => {
  return (
    <View
    style={{
        marginTop:10,
        margin:10,
       
    }}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
     
        
        data={items}
        renderItem={({item}) =>
        <Pressable
        style={{
            backgroundColor:"#FBCEB1",
            padding:10,
            paddingHorizontal:10,
            marginRight:5,
            
            borderRadius:10,
        }}
        >
            <Text
            style={{
                fontSize:15,
                fontWeight:"bold",
                color:"#AA0000",
            }}
            >{item.name}</Text>
        </Pressable>
    }
        horizontal
       />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})