import {Pressable, Text, StyleSheet} from "react-native";

type Props = {
  name: string
  onPress: any
}

export const Button = ({name, onPress}: Props) => {
  return (
    <Pressable style={styles.saveButton} onPress={onPress}><Text
      style={styles.saveButtonTitle}>{name}</Text></Pressable>
  )
}

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: "#3050FE",
    marginTop: 32,
    paddingVertical: 6,
    borderRadius: 5,
  },
  saveButtonTitle: {
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center",
  }
})