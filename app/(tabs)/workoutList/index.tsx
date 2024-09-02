import {Text, StyleSheet, ScrollView, Pressable} from "react-native";
import {WorkoutList as WorkoutListComponent} from "@/components/Home/WorkoutList";
import {SafeAreaView} from "react-native-safe-area-context";
import {TabNavigator} from "@/app/_layout";
import {PlusIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";

export const WorkoutList = () => {
  const navigation = useNavigation<WorkoutItemNavigationProp>()

  const handleNewWorkout = () => {
    navigation.navigate("NewWorkout")
  }

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <WorkoutListComponent title={"Plans list"} detailsToShow={["time", "exercises"]}/>
        </SafeAreaView>
      </ScrollView>
      <Pressable onPress={handleNewWorkout} style={styles.addCircleButton}><PlusIcon style={styles.icon}/></Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
  },
  addCircleButton: {
    backgroundColor: "#3050FE",
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    position: "absolute",
    bottom: 25,
    right: 30,
  },
  icon: {
    width: 40,
    height: 40,
    color: "#FFFFFF",
    fontWeight: "bold",
  }
})