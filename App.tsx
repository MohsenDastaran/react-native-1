import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [tempText, setTempText] = useState("Hello World 2!");

  return (
    <View style={styles.container}>
      <Text>Hello World! </Text>
      <Text style={styles.text}> {tempText}</Text>
      <Button title="Tap me" onPress={() => setTempText("Hi")} />
      <Button title="Tap me" onPress={() => setTempText("Hello World 2!")} />
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
  text: {
    color: "red",
    margin: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  button: {
    borderRadius: 5,
  },
});
