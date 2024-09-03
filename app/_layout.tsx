import React, {useEffect} from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme} from '@/hooks/useColorScheme';
import NotFoundScreen from "@/app/+not-found";
import HomeScreen from "@/app/(tabs)";
import {WorkoutList} from "@/app/(tabs)/workoutList";
import {TrainingView} from "@/app/traininigView";
import {NewWorkout} from "@/app/newWorkout";
import {ExerciseList} from "@/app/exerciseList";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name={"Plans"} component={WorkoutList} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer independent={true} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="+not-found" component={NotFoundScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TrainingView" component={TrainingView} options={{headerShown: false}}/>
        <Stack.Screen name={"Home"} component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name={"NewWorkout"} component={NewWorkout} options={{headerShown: false}}/>
        <Stack.Screen name={"ExerciseList"} component={ExerciseList} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
