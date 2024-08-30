export type Workout = {
  name: string
  planData: Plan
  userID: number
  xata_id: string
}

type Plan = {
  description: string,
  workoutTitle: string,
  exercises: Exercise[]
}

type Exercise = {
  exerciseName: string,
  sets: Set[]
}

type Set = {
  reps: number,
  weigth: number
}