import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  WorkoutItem: any;
  TrainingView: any;
  Home: any;
  NewWorkout: any;
  ExerciseList: any | { id: string };
};

export type WorkoutItemNavigationProp = StackNavigationProp<RootStackParamList, 'WorkoutItem'>;
