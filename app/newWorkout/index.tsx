import {View, StyleSheet, Pressable} from "react-native";
import {WorkoutHeader} from "@/components/workoutHeader";
import {Wrapper} from "@/components/wrapper";
import {Input} from "@/components/input";
import {Label} from "@/components/label";
import {ExerciseView} from "@/components/exerciseView";
import {useState} from "react";
import {Exercise} from "@/types/Workout";
import {AddOrEditButton} from "@/components/addOrEditButton";
import {PlusIcon} from "react-native-heroicons/outline";
import {OverlayButton} from "@/components/overlayButton";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";

export const NewWorkout = () => {
  const navigation = useNavigation<WorkoutItemNavigationProp>()

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

  const newSet = (index: number) => {
    const newExercisesList = [...exercisesList];
    newExercisesList[index].sets.push({
      reps: 0,
      weigth: 0,
    });

    setExercisesList(newExercisesList)
  }

  const deleteLastSet = (index: number) => {
    const newExercisesList = [...exercisesList];
    newExercisesList[index].sets.pop();

    setExercisesList(newExercisesList)
  }

  const handleAddExercise = () => {
    navigation.navigate("ExerciseList")
  }

  return (
    <>
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
                  <>
                    <ExerciseView exercise={exercise} exercisesList={exercisesList} setExercisesList={setExercisesList}
                                  exerciseIndex={exerciseIndex}/>
                    <View style={styles.actionButtonsContainer}>
                      <AddOrEditButton onPressDelete={() => deleteLastSet(exerciseIndex)}
                                       onPressAdd={() => newSet(exerciseIndex)}/>
                    </View>
                  </>
                )
              })}
            </View>
          </View>
        </WorkoutHeader>
      </Wrapper>
      <OverlayButton onPress={handleAddExercise}/>
    </>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 24,
  },
  exercises: {
    marginTop: 24,
  },
  actionButtonsContainer: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
})