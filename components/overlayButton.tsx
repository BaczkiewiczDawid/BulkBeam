import {Pressable, StyleSheet} from "react-native";
import {PlusIcon} from "react-native-heroicons/outline";

type Props = {
  onPress: () => void
}

export const OverlayButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.addCircleButton}><PlusIcon style={styles.icon}/></Pressable>
  )
}

const styles = StyleSheet.create({
  addCircleButton: {
    backgroundColor: "#3050FE",
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    position: "absolute",
    bottom: 25,
    right: 30,
  },
  icon: {
    width: 40,
    height: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
  }
})