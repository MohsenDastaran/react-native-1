import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [goals, setdGoals] = useState<{ id: number; text: string }[]>([
    { id: 1, text: "Test 1" },
    { id: 2, text: "Test 2" },
    { id: 3, text: "Test 3" },
    { id: 4, text: "Test 4" },
    { id: 5, text: "Test 5" },
    { id: 6, text: "Test 6" },
    { id: 7, text: "Test 7" },
    { id: 8, text: "Test 8" },
    { id: 9, text: "Test 9" },
  ]);

  const addGoalHandler = (goal: string) => {
    if (!goal) return;
    setdGoals(goals.concat({ id: Math.random(), text: goal }));
  };

  const deleteGoalHandler = (id: number) => {
    setdGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#841585"
        onPress={() => setIsModalVisible(true)}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              item={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 10,
  },
});
