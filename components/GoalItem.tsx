import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const GoalItem = (props: {
  item: string;
  id: number;
  onDelete: (id: number) => void;
}) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.goalItem, pressed && { opacity: 0.6 }]}
      onPress={() => props.onDelete(props.id)}
    >
      <Text style={styles.goalText}>{props.item}</Text>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#e0e0e0",
  },
  goalText: {
    fontSize: 16,
    color: "#333",
  },
});
