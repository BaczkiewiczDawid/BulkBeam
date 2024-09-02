import {Text, View, StyleSheet} from "react-native";
import {ClockIcon, ScaleIcon} from "react-native-heroicons/outline";
import {timeFormatter} from "@/helpers/time-formatter";
import {weightFormatter} from "@/helpers/weigth-formatter";

type Props = {
  detailsToShow: string[]
  time?: number,
  weight?: number
  exercises?: number
}

export const WorkoutDetails = ({detailsToShow, time, weight, exercises}: Props) => {
  return (
    <View style={styles.details}>
      {(detailsToShow.includes("time") && time) && (
        <View style={styles.detailsItem}>
          <ClockIcon style={styles.icon}/>
          <Text style={styles.text}>{timeFormatter(time)}</Text>
        </View>
      )}
      {(detailsToShow.includes("weight") && weight) && (
        <View style={styles.detailsItem}>
          <ScaleIcon style={styles.icon}/>
          <Text style={styles.text}>{weightFormatter(weight)}kg</Text>
        </View>
      )}
      {(detailsToShow.includes("exercises") && exercises) && (
        <View style={styles.detailsItem}>
          <ScaleIcon style={styles.icon}/>
          <Text style={styles.text}>{exercises} exercises</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    color: "#414141",
    width: 24,
    height: 24,
  },
  text: {
    color: "#414141",
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 8,
  },
})