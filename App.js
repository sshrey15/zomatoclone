import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StackNavigator from "./StackNavigator";
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
