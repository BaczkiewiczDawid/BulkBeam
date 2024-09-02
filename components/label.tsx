import { Text, StyleSheet } from "react-native"

type Props = {
  name: string
}

export const Label = ({name}: Props) => {
  return (
    <Text style={styles.text}>{name}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    marginBottom: 8,
    fontSize: 24,
  }
})