import {View, Text, StyleSheet, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WorkoutList as WorkoutListComponent} from "@/components/Home/WorkoutList";
import {TabNavigator} from "@/app/_layout";
import {WorkoutDetails} from "@/components/navigation/workoutDetails";
import {useEffect, useState} from "react";
import {Workout} from "@/types/Workout";

type Props = {
  route: any;
}

export const TrainingView = ({route}: Props) => {
  const {workoutName} = route.params
  const [activeWorkout, setActiveWorkout] = useState<Workout>()

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

  console.log(Array(activeWorkout?.planData).length)

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{activeWorkout?.name}</Text>
          <View>
            <WorkoutDetails detailsToShow={["time", "exercises"]} time={124}
                            exercises={Array(activeWorkout?.planData).length + 1}/>
            <View style={styles.exerciseView}>
              <Text style={styles.title}>Benchpress</Text>
              <View style={styles.setView}>
                <View></View>
                <View></View>
                <View></View>
              </View>
            </View>
          </View>
        </View>
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
  },
  setView: {
    display: "flex"
  }
})