import {Text, View, StyleSheet} from "react-native";
import {SingleSet} from "@/components/workoutDetails/singleSet";
import {Exercise, ExercisesList} from "@/types/Workout";

type Props = {
  exercise: {
    exerciseName: string,
    sets: {
      reps: number,
      weigth: number
    }[]
  }
  exercisesList: Exercise[]
  setExercisesList: (ExercisesList: Exercise[]) => void
  exerciseIndex: number
}

export const ExerciseView = ({exercise, exercisesList, setExercisesList, exerciseIndex}: Props) => {
  return (
    <View style={styles.exerciseView}>
      <Text style={styles.title}>{exercise.exerciseName}</Text>
      <View style={styles.setsContainer}>
        {exercise.sets.map((set, index) => (
          <SingleSet
            key={index}
            set={set}
            index={index}
            exercisesList={exercisesList}
            setExercisesList={setExercisesList}
            exerciseIndex={exerciseIndex}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseView: {
    backgroundColor: "#EEEEEE",
    padding: 24,
    borderRadius: 10,
    marginTop: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  setsContainer: {
    marginTop: 10,
  },
})