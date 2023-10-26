import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AntDesign,
  Entypo,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import Ratting from "../../components/Ratting";

import Menu from "../../components/Menu";
import menuData from "../../data/menuData";





const HotelRoom = () => {
  const route = useRoute();
  const { name, smalladress, cuisines, rate, timing, offering } = route.params; // Access the id parameter
  const navigation = useNavigation();
  const data = menuData;

  return (
    <ScrollView>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 11,
            paddingLeft: 10,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {name}
              </Text>
              <Ratting props={rate} />
            </View>
          </Text>
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

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 11,
          paddingLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFDD0",
              borderRadius: 5,
              spaceBetween: 10,
              flexDirection: "column",
              alignItems: "center",
              paddingHorizontal: 11,
            }}
          >
            <MaterialIcons name="delivery-dining" size={35} color="black" />
          </View>

          <View
            style={{
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Mode
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                color: "grey",
              }}
            >
              Delivery
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#B9D9EB",
              borderRadius: 5,
              spaceBetween: 10,
              flexDirection: "column",
              alignItems: "center",
              paddingHorizontal: 11,
            }}
          >
            <Entypo name="back-in-time" size={35} color="black" />
          </View>

          <View
            style={{
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Time
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                color: "grey",
              }}
            >
              {timing}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#90EE90",
              borderRadius: 5,
              spaceBetween: 10,
              flexDirection: "column",
              alignItems: "center",
              paddingHorizontal: 11,
            }}
          >
            <MaterialCommunityIcons
              name="brightness-percent"
              size={35}
              color="black"
            />
          </View>

          <View
            style={{
              marginLeft: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
              }}
            >
              Offers
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "normal",
                color: "grey",
              }}
            >
              {offering}
            </Text>
          </View>
        </View>

       
      </View>

      <View style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor:"white",
            paddingHorizontal: 11,
            marginTop:20,
            height:40,
            borderRadius:50,
            margin:10,
          }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 11,
            paddingLeft: 10,
          
          }}>
          <Fontisto name="motorcycle" size={30} color="black" />
            </View>
          <Text style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 11,
            paddingLeft: 10,
            fontSize:15,
            fontWeight:"normal",
            color:"grey",
          

          }}>Ruppes 30 additional distance free </Text>
          
          
      </View>

      <View style={{
        margin:5,
      }}>
        <View>
      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: "bold",
        color: "black",
        flexDirection: "column",
        margin: 10,
        textAlign:"left",
       
        borderBottomWidth:3,
        width:75,
        textAlign:"center",
        borderBottomColor:"orange",
       
        
      }}>
        Full Menu
      </Text>
 
    </View>

      </View>

      <View style={{
        margin  :5,
        

      
      }}>
      {
          data.map((menu) => (<Menu  menu={menu}/>))
        }
      </View>

    </SafeAreaView>
    </ScrollView>
  );
};

export default HotelRoom;

const styles = StyleSheet.create({});
