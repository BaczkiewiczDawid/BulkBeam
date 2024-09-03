import {Pressable, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

type Props = {
  name: string
  onPress?: () => void
}

export const GridItem = ({name, onPress}: Props) => {
  const navigation = useNavigation()

  return (
    <Pressable style={styles.groupItem}>
      <View style={styles.box}></View>
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  groupItem: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 16,
    width: "33%"
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: "#414141",
  },
  text: {
    color: "#414141",
    fontSize: 18,
    marginTop: 8,
  }
})