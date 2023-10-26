import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const Menu = (props) => {
  const menu = props.menu;

  return (
    <Pressable style={{ flexDirection: "column", marginBottom: 10,marginLeft:10,
    marginRight:10,marginTop:10,backgroundColor:"white",borderRadius:10, 
     }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between",alignItems:"center",margin:10,
      marginTop:30,marginBottom:-10
     }}>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between", }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "black",  }}>
            {menu.name}
          </Text>
          <Text style={{ fontSize: 25, fontWeight: "normal", color: "grey" }}>
            {menu.price}
          </Text>
        </View>
      </View>

      <Image
        style={{
          width: 100,
          height: 150,
          borderRadius: 10,
          aspectRatio: 1,
          margin: 10,
            alignSelf: "flex-end",
            
         
        }}
        source={{ uri: menu.image }}
      />
    </Pressable>
  );
};

export default Menu;

const styles = StyleSheet.create({});
