import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = (props: { onAddGoal: (goal: string) => void }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    if (!enteredGoal) return;
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Your Goal"
        onChangeText={setEnteredGoal}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    width: "75%",
    borderColor: "#cccccc",
    borderRadius: 3,
    padding: 4,
    marginEnd: 4,
  },
});
