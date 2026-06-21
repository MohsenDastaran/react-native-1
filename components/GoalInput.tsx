import {
  Button,
  StyleSheet,
  Modal,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

const GoalInput = (props: {
  onAddGoal: (goal: string) => void;
  visible: boolean;
  onCancel: () => void;
}) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    if (!enteredGoal) return;
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/expo.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal"
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.butonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#9b1558" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#011d24" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b7b66",
    gap: 10,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#cccccc",
    borderRadius: 6,
    padding: 16,
    marginEnd: 4,
    color: "#120438",
    backgroundColor: "#ece1fa",
  },
  butonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    width: "100%",
  },
  button: {
    width: "40%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
