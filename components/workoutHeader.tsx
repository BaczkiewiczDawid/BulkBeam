import {StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {
  title: string
  children: React.ReactNode
}

export const WorkoutHeader = ({ title, children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{title}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
  },
})