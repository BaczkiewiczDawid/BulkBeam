import {View, Text, StyleSheet, ScrollView, Pressable, TextInput} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WorkoutDetails} from "@/components/navigation/workoutDetails";
import {useEffect, useState} from "react";
import {Exercise, Plan, Workout} from "@/types/Workout";
import {SingleSet} from "@/components/workoutDetails/singleSet";
import {PencilSquareIcon, PlusCircleIcon, TrashIcon} from "react-native-heroicons/outline";
import {Button} from "@/components/Button";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";
import {Wrapper} from "@/components/wrapper";
import {ExerciseView} from "@/components/exerciseView";

type Props = {
  route: any;
}

export const TrainingView = ({route}: Props) => {
  const {defaultWorkoutName} = route.params;
  const [workoutName, setWorkoutName] = useState(defaultWorkoutName);
  const [activeWorkout, setActiveWorkout] = useState<Workout | undefined>(undefined);
  const [exercisesList, setExercisesList] = useState<Exercise[]>([]);
  const navigation = useNavigation<WorkoutItemNavigationProp>();
  const [workoutID, setWorkoutID] = useState<string | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [newWorkoutName, setNewWorkoutName] = useState(workoutName);

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
        name: workoutName,
      }),
    });
  };

  const newSet = (index: number) => {
    if (!activeWorkout) return;

    const newExercisesList = [...exercisesList];
    newExercisesList[index].sets.push({
      reps: 0,
      weigth: 0,
    });

    setExercisesList(newExercisesList)
  }

  const deleteLastSet = (index: number) => {
    if (!activeWorkout) return;

    const newExercisesList = [...exercisesList];
    newExercisesList[index].sets.pop();

    setExercisesList(newExercisesList)
  }

  const editWorkoutName = () => {
    if (!activeWorkout) return;

    setModalOpen(true)
  }

  const saveWorkoutName = () => {
    setWorkoutName(newWorkoutName)
    setModalOpen(false)
  }

  return (
    <>
      <Wrapper>
        <View style={styles.header}>
          <Pressable style={styles.titleContainer} onPress={editWorkoutName}>
            <Text style={styles.title}>{workoutName ?? activeWorkout?.name}</Text>
            <PencilSquareIcon style={styles.editIcon}/>
          </Pressable>
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
                <ExerciseView
                  exercise={exercise}
                  exercisesList={exercisesList}
                  setExercisesList={setExercisesList}
                  exerciseIndex={exerciseIndex}/>
                <View style={styles.actionButtonsContainer}>
                  <Pressable style={styles.addButton} onPress={() => newSet(exerciseIndex)}>
                    <Text style={styles.buttonText}>Add set</Text>
                    <PlusCircleIcon/>
                  </Pressable>
                  <Pressable style={styles.deleteButton} onPress={() => deleteLastSet(exerciseIndex)}>
                    <TrashIcon style={styles.trashIcon}/>
                    <Text style={styles.deleteText}>Delete set</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>
        <Button name={"Save"} onPress={() => saveWorkout()}/>
      </Wrapper>
      {modalOpen && (
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle} aria-label="Label for workout name" nativeID="workoutName">Name</Text>
            <TextInput style={styles.formInput} aria-label="input" aria-labelledby="workoutName"
                       placeholder={workoutName ?? activeWorkout?.name}
                       onChange={(value) => setNewWorkoutName(value.nativeEvent.text)}/>
            <Pressable onPress={saveWorkoutName} style={styles.addButton}><Text
              style={styles.buttonText}>Save</Text></Pressable>
          </View>
        </View>
      )}
    </>
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
  actionButtonsContainer: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
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
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  editIcon: {
    marginLeft: 12,
    width: 20,
    height: 20,
  },
  modalContainer: {
    position: "absolute",
    width: "90%",
    minHeight: 130,
    backgroundColor: "#FFFFFF",
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    padding: 20,
    borderRadius: 5,
  },
  modalBackdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(33, 50, 50, 0.5)",
    marginLeft: 0,
    marginRight: 0,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "rgba(65, 65, 65, .8)",
    width: 180,
    paddingLeft: 12,
    paddingVertical: 6,
    marginTop: 8,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "500"
  }
})