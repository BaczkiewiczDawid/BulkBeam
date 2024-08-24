import {StyleSheet, View, Text} from "react-native";
import {ClockIcon, ScaleIcon} from "react-native-heroicons/outline";

export const LastTraining = () => {
  return (
      <View style={styles.container}>
        <View style={styles.leftItems}>
          <View>
            <Text style={styles.title}>Last training</Text>
            <Text style={styles.text}>14.07.2024</Text>
          </View>
          <View style={styles.badgeWrapper}>
            <Text style={styles.badge}>Easy</Text>
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={styles.detailsHeader}>Push A</Text>
            <View style={styles.details}>
              <View style={styles.detailsItem}>
                <ClockIcon style={styles.icon}/>
                <Text style={styles.text}>1h 42m</Text>
              </View>
              <View style={styles.detailsItem}>
                <ScaleIcon style={styles.icon}/>
                <Text style={styles.text}>3 546kg</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 120,
    backgroundColor: "#3050FE",
    marginTop: 8,
    borderRadius: 10,
    padding: 14,
  },
  leftItems: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "500",
  },
  badge: {
    color: "#fafafa",
    backgroundColor: "#5DF989",
    paddingVertical: 4,
    paddingHorizontal: 18,
    width: "auto",
    borderRadius: 1000,
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 8,
  },
  text: {
    color: "#fafafa",
    fontSize: 12,
  },
  badgeWrapper: {
    marginTop: 12,
  },
  detailsWrapper: {
    marginTop: 12,
  },
  detailsHeader: {
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "500",
  },
  icon: {
    color: "#fafafa",
    width: 24,
    height: 24,
  },
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  }
})