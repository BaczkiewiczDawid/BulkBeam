import {StyleSheet, View, Text, Image} from 'react-native';
import defaultUserIcon from "@/assets/images/default-user-icon.png"
import {SafeAreaView} from "react-native-safe-area-context";
import {LastTraining} from "@/components/Home/last-training";

export default function HomeScreen() {
  return (
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
      <LastTraining />
    </SafeAreaView>
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
  }
});
