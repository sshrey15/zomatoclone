import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Ratting from "../../components/Ratting";

const HotelRoom = () => {
  const route = useRoute();
  const { name, smalladress, cuisines, rate } = route.params; // Access the id parameter
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable
        style={{
          margin: 10,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 230,
            }}
            onPress={() => {}}
          >
            <Entypo name="camera" size={24} color="black" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
            }}
            onPress={() => {}}
          >
            <MaterialIcons name="bookmark" size={24} color="black" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
            }}
            onPress={() => {}}
          >
            <FontAwesome name="share" size={24} color="black" />
          </Pressable>
        </Pressable>
      </Pressable>

      <View style={{ margin: 5, marginTop: 0 }}>
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 11,
            paddingLeft: 10,
          
        }}>

        <Text
          style={{
            marginTop: 20,
            margin: 10,
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {name}
          
         
        </Text>

        <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 11,
            paddingLeft: 70,
          
        
        }}>

          <Ratting props={rate}/>

          </View>

        </View>
        

        <View
          style={{
            marginTop: 5,
            margin: 10,
            fontSize: 10,
            fontWeight: "bold",
            color: "black",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              color: "grey",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "grey",
              }}
            >
              {cuisines}
            </Text>

            {"\n"}
            {smalladress}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HotelRoom;

const styles = StyleSheet.create({});
