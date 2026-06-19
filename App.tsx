import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goals, setdGoals] = useState<string[]>([]);
  const [enteredGoal, setEnteredGoal] = useState("");
  // const goalInputHandler = (e: string) => {
  //   setEnteredGoal(e);
  // };
  const addGoalHandler = () => {
    setdGoals(goals.concat(enteredGoal));
    setEnteredGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add Your Goal"
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((g) => (
          <Text key={g + Math.random()}>{g}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 10,
  },
});
