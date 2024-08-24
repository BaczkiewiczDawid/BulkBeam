import {View, Text} from "react-native";

type Props = {
  route: any;
}

export const TrainingView = ({ route }: Props) => {
  const { workoutName } = route.params

  return (
    <View>
      <Text>Training view</Text>
      <Text>{workoutName}</Text>
    </View>
  )
}