import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Hotel = (props) => {
  const restaurant = props.restaurant;

  return (
    <View
      style={{
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        style={{
          width: "100%",
          borderRadius: 10,
          aspectRatio: 3 / 2,
        }}
        source={{ uri: restaurant.featured_image }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          padding: 10,
          backgroundColor: "rgba(0,0,0,0.7)",
          width: "100%",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* Name and Cuisines */}
        <View>
          <Text
            style={{
              margin: 10,
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              flexDirection: "column",
            }}
          >
            {restaurant.name}
            {"\n"}
            <Text
              style={{fontSize: 15,fontWeight: "normal",color: "white",flexDirection: "column",
              }}
            >
              {restaurant.cuisines}
            </Text>

            
            
           
          </Text>
        </View>

        {/* Ratting */}
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
          {restaurant.aggregate_rating} 
        </Text></View>
      </View>
    </View>
  );
};

export default Hotel;

const styles = StyleSheet.create({});
