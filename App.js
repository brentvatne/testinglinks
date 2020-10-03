import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useUrl, makeUrl, openURL } from "expo-linking";

export default function App() {
  const url = useUrl();

  return (
    <View style={styles.container}>
      <Text>{url}</Text>
      <Text>{makeUrl("/path", { hello: "world" })}</Text>
      <StatusBar style="auto" />
      <Button onPress={() => openURL(makeUrl('/demo', { variable: 'hello' } ))} title="Open something" />
    </View>
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
