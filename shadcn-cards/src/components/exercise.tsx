import ColdPlungeTimer from "./timer"
import { Container } from "./ui/container"

export interface ExerciseProps {
  exerciseName: string
}

export default function Exercise() {
  const handleSessionFinished = (sessionData) => {
    console.log("Session Ended!", sessionData)
  }

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center sm:px-12 md:px-24 lg:px-32">
      {/* Inner constraint so it doesn't stretch infinitely on wide desktop screens */}
      <div className="w-full max-w-md lg:max-w-lg">
        <ColdPlungeTimer
          mode="stopwatch"
          totalDuration={50}
          temperature={23}
          temperatureScale="F"
          onEndSession={handleSessionFinished}
        />
      </div>
      {/* <h1> {exerciseName}</h1> */}
    </div>
  )
}
