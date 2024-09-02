import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  WorkoutItem: any;
  TrainingView: any;
  Home: any;
};

export type WorkoutItemNavigationProp = StackNavigationProp<RootStackParamList, 'WorkoutItem'>;
