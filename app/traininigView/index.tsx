import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WorkoutDetails} from "@/components/navigation/workoutDetails";
import {useEffect, useState} from "react";
import {Exercise, Plan, Workout} from "@/types/Workout";
import {SingleSet} from "@/components/workoutDetails/singleSet";
import {PlusCircleIcon} from "react-native-heroicons/outline";
import {Button} from "@/components/Button";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";

type Props = {
  route: any;
}

export const TrainingView = ({route}: Props) => {
  const {workoutName} = route.params;
  const [activeWorkout, setActiveWorkout] = useState<Workout | undefined>(undefined);
  const [exercisesList, setExercisesList] = useState<Exercise[]>([]);
  const navigation = useNavigation<WorkoutItemNavigationProp>();
  const [workoutID, setWorkoutID] = useState<string | undefined>(undefined);

  console.log(activeWorkout)

  const getSelectedPlan = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({workoutName: workoutName, userID: 1}),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSelectedPlan();
      if (data && data.length > 0) {
        setActiveWorkout(data[0]);
        setExercisesList(data[0].planData.exercises || []);
        setWorkoutID(data[0].name);
      }
    };

    fetchData();
  }, [workoutName]);

  const saveWorkout = async () => {
    if (!activeWorkout) return;

    const response = await fetch("http://localhost:3000/update-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        xataID: activeWorkout.xata_id,
        planData: {
          workoutTitle: activeWorkout.planData.workoutTitle,
          description: activeWorkout.planData.description,
          exercises: exercisesList,
        },
      }),
    });
  };

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{activeWorkout?.name}</Text>
          <View>
            {activeWorkout?.planData && (
              <WorkoutDetails
                detailsToShow={["time", "exercises"]}
                time={124}
                exercises={(activeWorkout.planData.exercises || []).length}
              />
            )}
            {activeWorkout?.planData.exercises?.map((exercise, exerciseIndex) => (
              <View key={exerciseIndex}>
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
                <Pressable style={styles.addButton}>
                  <Text style={styles.buttonText}>Add set</Text>
                  <PlusCircleIcon/>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
        <Button name={"Save"} onPress={() => saveWorkout()}/>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  exerciseView: {
    backgroundColor: "#EEEEEE",
    padding: 24,
    borderRadius: 10,
    marginTop: 28,
  },
  setView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
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
    paddingLeft: 8,
    paddingBottom: 2,
  },
  setsContainer: {
    marginTop: 10,
  },
  addButton: {
    width: 150,
    backgroundColor: "#3050FE",
    color: "#FFFFFF",
    marginTop: 12,
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
})