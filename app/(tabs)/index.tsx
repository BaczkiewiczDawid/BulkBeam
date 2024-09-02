import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import defaultUserIcon from "@/assets/images/default-user-icon.png"
import {SafeAreaView} from "react-native-safe-area-context";
import {LastTraining} from "@/components/Home/LastTraining";
import {WorkoutList} from "@/components/Home/WorkoutList";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.username}>Dawid Bączkiewicz</Text>
          </View>
          <View>
            <View style={styles.userBadge}>
              <Image source={defaultUserIcon} style={styles.userBadgeImage} resizeMode={"cover"}/>
            </View>
          </View>
        </View>
        <LastTraining/>
        <WorkoutList title={"Next workout"} detailsToShow={["time", "weight"]}/>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    paddingVertical: 38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#414141",
    fontSize: 18,
  },
  username: {
    fontWeight: "500",
    fontSize: 24,
    color: "#3050FE",
  },
  userBadge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  userBadgeImage: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
  }
});
