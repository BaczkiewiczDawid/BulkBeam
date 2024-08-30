import {View, Text, StyleSheet, ScrollView, Pressable} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WorkoutDetails} from "@/components/navigation/workoutDetails";
import {useEffect, useState} from "react";
import {Workout} from "@/types/Workout";
import {SingleSet} from "@/components/workoutDetails/singleSet";
import {PlusCircleIcon} from "react-native-heroicons/outline";
import {Button} from "@/components/Button";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";

type Props = {
  route: any;
}

export const TrainingView = ({route}: Props) => {
  const {workoutName} = route.params
  const [activeWorkout, setActiveWorkout] = useState<Workout>()
  const navigation = useNavigation<WorkoutItemNavigationProp>()

  const getSelectedPlan = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({workoutName: workoutName, userID: 1})
      })

      const data = await response.json()

      return data
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSelectedPlan()
      setActiveWorkout(data[0])
    }

    fetchData()
  }, [workoutName])

  const saveWorkout = async () => {
    navigation.navigate("Home")

    const response = await fetch("http://localhost:3000/update-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({workoutName: workoutName, userID: 1, planData: activeWorkout?.planData})
    })
  }

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{activeWorkout?.name}</Text>
          <View>
            <WorkoutDetails
              detailsToShow={["time", "exercises"]}
              time={124}
              exercises={Array(activeWorkout?.planData).length + 1}/>
            {activeWorkout?.planData.exercises.map((exercise, exerciseIndex) => {
              return (
                <View key={exerciseIndex}>
                  <View style={styles.exerciseView}>
                    <Text style={styles.title}>{exercise.exerciseName}</Text>
                    <View style={styles.setsContainer}>
                      {exercise.sets.map((set, index) => {
                        return (
                          <SingleSet key={index} set={set} index={index}/>
                        )
                      })}
                    </View>
                  </View>
                  <Pressable style={styles.addButton}>
                    <Text style={styles.buttonText}>Add set</Text>
                    <PlusCircleIcon/>
                  </Pressable></View>
              )
            })}
          </View>
        </View>
        <Button name={"Save"} onPress={() => saveWorkout()}/>
      </SafeAreaView>
    </ScrollView>
  )
}

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