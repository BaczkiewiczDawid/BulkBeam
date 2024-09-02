export type Workout = {
  name: string
  planData: Plan
  userID: number
  xata_id: string
}

export type Plan = {
  description: string,
  workoutTitle: string,
  exercises: Exercise[]
}

export type Exercise = {
  exerciseName: string,
  sets: Set[]
}

type Set = {
  reps: number,
  weigth: number
}

export type ExercisesList = {
  exercisesList: {
    exerciseName: string,
    sets: {
      reps: number,
      weigth: number
    }[]
  }[]
}