import {Pressable, Text, StyleSheet} from "react-native";
import {PlusCircleIcon, TrashIcon} from "react-native-heroicons/outline";

type Props = {
  onPressDelete: any
  onPressAdd: any
}

export const AddOrEditButton = ({onPressDelete, onPressAdd}: Props) => {
  return (
    <>
      <Pressable style={styles.addButton} onPress={onPressAdd}>
        <Text style={styles.buttonText}>Add set</Text>
        <PlusCircleIcon/>
      </Pressable>
      <Pressable style={styles.deleteButton} onPress={onPressDelete}>
        <TrashIcon style={styles.trashIcon}/>
        <Text style={styles.deleteText}>Delete set</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  addButton: {
    width: 150,
    backgroundColor: "#3050FE",
    color: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 20,
    color: "#FC4141",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  deleteText: {
    color: "#FC4141",
    marginLeft: 8,
  },
  trashIcon: {
    width: 18,
    height: 18,
  },
})