import {StyleSheet, ScrollView} from "react-native";
import {WorkoutList as WorkoutListComponent} from "@/components/Home/WorkoutList";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {WorkoutItemNavigationProp} from "@/types/navigation";
import {OverlayButton} from "@/components/overlayButton";

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
      <OverlayButton onPress={handleNewWorkout}/>
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