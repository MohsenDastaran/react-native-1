import { StyleSheet, Text } from "react-native";
import React from "react";

const GoalInput = (props: { item: string; index: number }) => {
  return (
    <Text style={styles.goalItem} key={props.index + Math.random()}>
      {props.item}
    </Text>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});
