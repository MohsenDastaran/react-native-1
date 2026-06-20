import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goals, setdGoals] = useState<string[]>([
    "Test 1",
    "Test 2",
    "Test 3",
    "Test 4",
    "Test 5",
    "Test 6",
    "Test 7",
    "Test 8",
    "Test 9",
    "Test 10",
  ]);
  const [enteredGoal, setEnteredGoal] = useState("");

  const addGoalHandler = () => {
    if (!enteredGoal) return;
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
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <Text style={styles.goalItem} key={itemData.index + Math.random()}>
              {itemData.item}
            </Text>
          )}
        />
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});
