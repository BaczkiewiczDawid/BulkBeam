import {Text, StyleSheet, ScrollView} from "react-native";
import {WorkoutList as WorkoutListComponent} from "@/components/Home/WorkoutList";
import {SafeAreaView} from "react-native-safe-area-context";
import {TabNavigator} from "@/app/_layout";

export const WorkoutList = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <WorkoutListComponent title={"Plans list"} detailsToShow={["time", "exercises"]}/>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
  }
})