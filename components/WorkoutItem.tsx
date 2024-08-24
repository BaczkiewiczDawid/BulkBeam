import {View, Image, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
import dummyImage from "@/assets/images/training-image.png";
import {ClockIcon, ScaleIcon} from "react-native-heroicons/outline";
import {timeFormatter} from "@/helpers/time-formatter";
import {weightFormatter} from "@/helpers/weigth-formatter";
import {useState} from "react";
import {useNavigation} from '@react-navigation/native'
import {WorkoutItemNavigationProp} from "@/types/navigation";

type Props = {
  workoutName: string;
  description: string;
  time: number,
  weight: number,
}

export const WorkoutItem = ({workoutName, description, time, weight}: Props) => {
  const navigation = useNavigation<WorkoutItemNavigationProp>()

  const handlePress = () => {
    navigation.navigate('TrainingView', {workoutName: workoutName})
  }

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View>
        <Image source={dummyImage} resizeMode={"cover"}/>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{workoutName}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detailsItem}>
            <ClockIcon style={styles.icon}/>
            <Text style={styles.text}>{timeFormatter(time)}</Text>
          </View>
          <View style={styles.detailsItem}>
            <ScaleIcon style={styles.icon}/>
            <Text style={styles.text}>{weightFormatter(weight)}kg</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#EEEEEE",
    padding: 8,
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  details: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginTop: 8,
  },
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
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#414141"
  }
})