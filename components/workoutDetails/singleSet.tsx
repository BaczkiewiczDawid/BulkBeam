import {Text, TextInput, View, StyleSheet} from "react-native";
import {Exercise} from "@/types/Workout";

type Props = {
  set: {
    reps: number,
    weigth: number
  }
  index: number
  exercisesList: Exercise[]
  setExercisesList: (exercises: Exercise[]) => void
  exerciseIndex: number
}

type SetType = {
  weigth: number;
  reps: number;
};

export const SingleSet = ({set, index, exercisesList, setExercisesList, exerciseIndex}: Props) => {
  const setExercisesData = (value: string, index: number, field: keyof SetType) => {
    const updatedExercises = [...exercisesList];
    const currentExercise = updatedExercises[exerciseIndex];

    if (!currentExercise || !currentExercise.sets) {
      console.error("currentExercise or sets is undefined");
      return;
    }

    const currentSet = currentExercise.sets[index];

    if (currentSet) {
      currentSet[field] = field === "weigth" ? parseFloat(value) : parseInt(value);
      setExercisesList(updatedExercises);
    } else {
      console.error("currentSet is undefined");
    }
  };

  return (
    <View style={styles.setView} key={index}>
      <View style={styles.circle}>
        <Text style={styles.circleContent}>{index + 1}</Text>
      </View>
      <TextInput
        style={styles.input}
        inputMode={"decimal"}
        placeholder={`${set.weigth}kg...`}
        onChange={(value) => setExercisesData(value.nativeEvent.text, index, "weigth")}
      />
      <TextInput
        style={styles.inputSmall}
        inputMode={"decimal"}
        placeholder={`${set.reps}`}
        onChange={(value) => setExercisesData(value.nativeEvent.text, index, "reps")}
      />
    </View>
  );
};


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