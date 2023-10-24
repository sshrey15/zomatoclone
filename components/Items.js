import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'

const Items = () => {
  return (
    <View>
       <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "700",
                paddingLeft: 6,
              }}
            >
              Eat what makes you happy
            </Text>
            <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 11,
                }}
              >
                <View style={{ margin: 6 }}>
                  <Image
                    style={{
                        height:80,
                        width:80,
                        borderRadius:100,

                    }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Thalis
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={{
                        height:80,
                        width:80,
                        borderRadius:100,
                        }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Pizzas
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={{
                        height:80,
                        width:80,
                        borderRadius:100,
                    }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-SsbTrLAm9o9ABakjoILX9G5LIDNJnVwvA&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Burger
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={{
                        height:80,
                        width:80,
                        borderRadius:100,
                    }}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Dosas
                  </Text>
                </View>
              </View>
            </Pressable>
    </View>
  )
}

export default Items

const styles = StyleSheet.create({})