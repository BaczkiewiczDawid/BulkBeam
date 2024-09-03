import {Text} from "react-native";
import {Wrapper} from "@/components/wrapper";
import {useLocalSearchParams} from "expo-router";

export const ExerciseListID = () => {
  const {id} = useLocalSearchParams()

  return (
    <Wrapper>
      <Text>Exercise: {id}</Text>
    </Wrapper>
  )
}