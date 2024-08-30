import {Text, TextInput, View, StyleSheet} from "react-native";

type Props = {
  set: {
    reps: number,
    weigth: number
  }
  index: number
}

export const SingleSet = ({set, index}: Props) => {
  return (
    <View style={styles.setView}>
      <View style={styles.circle}>
        <Text style={styles.circleContent}>{index + 1}</Text>
      </View>
      <TextInput style={styles.input} inputMode={"decimal"} placeholder={`${set.weigth}kg...`}/>
      <TextInput style={styles.inputSmall} inputMode={"decimal"} placeholder={`${set.reps}`}/>
    </View>
  )
}

const styles = StyleSheet.create({
  setView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#3050FE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContent: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#414141",
    width: 180,
    marginLeft: 24,
    paddingLeft: 8,
    paddingBottom: 2,
  },
  inputSmall: {
    borderBottomWidth: 2,
    borderBottomColor: "#414141",
    width: 80,
    marginLeft: 24,
    paddingBottom: 2,
    textAlign: "center",
  }
})