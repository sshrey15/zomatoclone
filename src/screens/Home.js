import { StyleSheet, Text, TextInput, View,Pressable,Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import Items from "../../components/Items";
import Hotels from "../../data/Hotels";
import Hotel from "../../components/Hotel";

const Home = () => {
    const data = Hotels;
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#e8e8e8",
          height: 50,
          marginHorizontal: 10,
          marginVertical: 10,
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
      >
        <FontAwesome name="search" size={24} color="#AA0000" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={{
            
            height: 50,
            margin: 10,
            padding: 10,
            borderRadius: 8,
            fontSize: 20,
            flex: 1,
          }}
        />
      </View>
      <Categories />
      <Pressable 
                
                style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={
                    {
                        height: 200,
                        width: 400,
                        borderRadius: 10,
                        margin: 10,
                        padding: 10,
                        borderRadius: 8,
                        fontSize: 20,
                        flex: 1,
                    }
                  }
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                {/* <Image
                  style={{
                    height: 200,
                    width: 400,
                    borderRadius: 10,
                    margin: 10,
                    padding: 10,
                    borderRadius: 8,
                    fontSize: 20,
                    flex: 1,
                  }}
                  
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                /> */}
              </View>
            </Pressable>
            <View>
                <Items/>
            </View>

            <View>

                
            {
                data.map((item)=><Hotel restaurant={item}/>)
            }

            </View>


           
    </View>
   
  );
};

export default Home;

const styles = StyleSheet.create({});
