import {Text, View, StyleSheet} from "react-native";
import {WorkoutItem} from "@/components/WorkoutItem";

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

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Next workout</Text>
      <View>
        {workoutsList.map((workout, index) => (
          <WorkoutItem
            key={index}
            workoutName={workout.workoutTitle}
            description={workout.description}
            time={workout.time}
            weight={workout.weight}
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