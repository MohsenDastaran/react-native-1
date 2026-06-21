import {
  Button,
  StyleSheet,
  Modal,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import expoImage from "../assets/images/expo.png";
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
    props;
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={expoImage} />
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal"
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.butonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
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
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#cccccc",
    gap: 10,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#cccccc",
    borderRadius: 3,
    padding: 4,
    marginEnd: 4,
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
