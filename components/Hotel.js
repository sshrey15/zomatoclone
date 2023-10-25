import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ratting from "./Ratting";

const Hotel = (props) => {
  const restaurant = props.restaurant;
  const navigation = useNavigation ();

  return (

    <Pressable 
    /* Javascript Object */
    onPress={() => {
      navigation.navigate("HotelRoom", { 
        id: restaurant.id,
        name: restaurant.name,
        adress: restaurant.adress,
        smalladress: restaurant.smalladress,
        cuisines: restaurant.cuisines,
        rate: restaurant.aggregate_rating,
        
       }); // Pass the id as a parameter
    }}
    
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
        <Ratting props={restaurant.aggregate_rating}/>
      </View>
    </Pressable>
  );
};

export default Hotel;

const styles = StyleSheet.create({});
