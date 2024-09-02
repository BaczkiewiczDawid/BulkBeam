import {View, Text, StyleSheet} from "react-native";
import {WorkoutHeader} from "@/components/workoutHeader";
import {Wrapper} from "@/components/wrapper";
import {Input} from "@/components/input";
import {Label} from "@/components/label";
import {ExerciseView} from "@/components/exerciseView";
import {useState} from "react";
import {Exercise} from "@/types/Workout";

export const NewWorkout = () => {
  const [exercisesList, setExercisesList] = useState<Exercise[]>([
    {
      exerciseName: "Bench press",
      sets: [
        {
          reps: 10,
          weigth: 100
        },
        {
          reps: 10,
          weigth: 100
        },
        {
          reps: 10,
          weigth: 100
        }
      ]
    }
  ])

  return (
    <Wrapper>
      <WorkoutHeader title={"New workout"}>
        <View style={styles.form}>
          <Label name={"Workout name"}/>
          <Input
            title={"Workout name"}
          />
          <View style={styles.exercises}>
            <Label name={"Exercises"}/>
            {exercisesList.map((exercise, exerciseIndex) => {
              return (
                <ExerciseView exercise={exercise} exercisesList={exercisesList} setExercisesList={setExercisesList}
                              exerciseIndex={exerciseIndex}/>
              )
            })}
          </View>
        </View>
      </WorkoutHeader>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 24,
  },
  exercises: {
    marginTop: 24,
  }
})