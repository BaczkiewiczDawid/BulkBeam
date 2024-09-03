import {Text, View, StyleSheet} from "react-native";
import {Wrapper} from "@/components/wrapper";
import {WorkoutHeader} from "@/components/workoutHeader";
import {GridItem} from "@/components/gridItem";

export const ExerciseList = () => {
  return (
    <Wrapper>
      <WorkoutHeader title={"Select muscle group"}>
        <View style={styles.container}>
          <GridItem name={"Chest"}/>
          <GridItem name={"Back"}/>
          <GridItem name={"Legs"}/>
          <GridItem name={"Legs"}/>
          <GridItem name={"Legs"}/>
        </View>
      </WorkoutHeader>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 32,
    flex: 3,
    flexWrap: "wrap",
  },
})