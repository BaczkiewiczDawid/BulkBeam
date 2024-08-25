import {Text, View, StyleSheet} from "react-native";
import {WorkoutItem} from "@/components/WorkoutItem";
import {useEffect, useState} from "react";


type Workout = {
  name: string,
  planData: {
    description: string,
    time: number,
    weight: number,
    workoutTitle: string
  }
  xata_id: string
}

export const WorkoutList = () => {
  const workoutsList = [
    {
      workoutTitle: "Push A",
      description: "Description of workout",
      time: 126,
      weight: 3546,
    },
    {
      workoutTitle: "Push B",
      description: "Description of workout",
      time: 87,
      weight: 3546,
    },
    {
      workoutTitle: "Pull A",
      description: "Description of workout",
      time: 97,
      weight: 3546,
    },
  ]

  const [workoutList, setWorkoutList] = useState<Workout[]>([])

  const getWorkoutList = async () => {
    try {
      const response = await fetch(`http://localhost:3000/workoutPlans`, {})
      console.log("response", response)
      const data = await response.json()
      return data
    } catch (error) {
      console.error
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const workoutList = await getWorkoutList();
      setWorkoutList(workoutList)
    };

    fetchData()
  }, []);

  console.log("workoutList", workoutList.map((workout) => workout.name))

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Next workout</Text>
      <View>
        {workoutList.map((workout, index) => (
          <WorkoutItem
            key={index}
            workoutName={workout.name}
            description={workout.planData.description}
            time={workout.planData.time}
            weight={workout.planData.weight}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
  },
})