import React, { useState, useEffect } from "react"
import { Wind, Thermometer, Heart, Pause, Play, X } from "lucide-react"

export interface ColdPlungeTimerProps {
  mode: "countdown" | "stopwatch"
  totalDuration: number
  initialTime?: number
  temperature: number
  temperatureScale?: "C" | "F"
  onEndSession: (data: any) => void
}

export default function ColdPlungeTimer({
  mode = "countdown",
  totalDuration = 3 * 60,
  initialTime,
  temperature,
  temperatureScale = "C",
  onEndSession,
}: ColdPlungeTimerProps) {
  // Determine the starting time if not explicitly provided
  const defaultStartTime = mode === "countdown" ? totalDuration : 0
  const startingTime =
    initialTime !== undefined ? initialTime : defaultStartTime

  // State
  const [time, setTime] = useState(startingTime)
  const [isPaused, setIsPaused] = useState(false)

  // Handle End Session
  const handleEndSession = () => {
    setIsPaused(true) // Stop the timer immediately

    if (onEndSession) {
      // Pass back useful stats to the parent component
      onEndSession({
        finalTimeSeconds: time,
        mode: mode,
        completed: mode === "countdown" ? time <= 0 : time >= totalDuration,
        // Calculate actual time spent in the water
        timeSpentSeconds: mode === "countdown" ? totalDuration - time : time,
      })
    }
  }

  // Timer Logic
  useEffect(() => {
    // Do nothing if paused or if limits are reached
    if (isPaused) return
    if (mode === "countdown" && time <= 0) return
    if (mode === "stopwatch" && time >= totalDuration) return

    const timerInterval = setInterval(() => {
      setTime((prev) => (mode === "countdown" ? prev - 1 : prev + 1))
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [time, isPaused, mode, totalDuration])

  // Formatting Time (MM:SS)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`

  // SVG Ring Math
  const radius = 44
  const circumference = 2 * Math.PI * radius

  // This math naturally handles both modes:
  const progressRatio = time / totalDuration
  const offset = circumference - progressRatio * circumference

  return (
    <div className="flex w-full flex-col items-center font-sans text-white antialiased">
      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#00e7b4]">
          <Wind className="h-6 w-6" />
          BreathFlow
        </div>
        <button className="text-sm font-medium text-gray-400 transition-colors hover:text-white">
          Day streak #28
        </button>
      </div>

      {/* Status Pill */}
      <div className="mb-8 flex items-center rounded-full border border-[#00e7b4]/10 bg-[#0b342a] px-4 py-1.5 text-xs font-bold tracking-widest text-[#00e7b4] shadow-[0_0_15px_rgba(0,231,180,0.05)]">
        <span className="mr-2.5 h-1.5 w-1.5 animate-pulse rounded-full bg-[#00e7b4]"></span>
        ACTIVE PLUNGE
      </div>

      {/* ========================================== */}
      {/* TIMER COMPONENT                            */}
      {/* ========================================== */}
      <div className="relative mb-8 flex h-60 w-60 items-center justify-center">
        {/* SVG Circular Progress Rings */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 transform"
          viewBox="0 0 100 100"
        >
          {/* Background decorative tick ring */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#1d2833"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
          {/* Dark background track */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#1c252d"
            strokeWidth="3"
          />

          {/* Glowing Cyan Progress Track */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#00e7b4"
            strokeWidth="3"
            strokeLinecap="round"
            className="drop-shadow-[0_0_6px_rgba(0,231,180,0.6)] transition-all duration-1000 ease-linear"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute mt-1 flex flex-col items-center justify-center">
          <span className="mb-1 text-[13px] font-medium tracking-wide text-gray-400">
            Plunging
          </span>
          <span
            className="text-6xl font-bold tracking-tighter text-[#00e7b4] [text-shadow:0_0_12px_rgba(0,231,180,0.4)]"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {formattedTime}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-6 grid w-full">
        {/* Water Temp */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-800/60 bg-[#161f26] p-4 shadow-lg">
          <Thermometer className="mb-2 h-6 w-6 text-[#00e7b4]" />
          <span className="mb-1 text-xs font-medium text-gray-400">
            Water Temp
          </span>
          <span className="text-xl font-bold text-white">
            {temperature} {temperatureScale === "C" ? `°C` : "°F"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00e7b4] py-3.5 font-bold text-[#080c10] shadow-[0_0_15px_rgba(0,231,180,0.2)] transition-colors hover:bg-[#00c99d]"
      >
        {isPaused ? (
          <Play className="h-5 w-5 fill-current" />
        ) : (
          <Pause className="h-5 w-5 fill-current" />
        )}
        {isPaused ? "Resume Session" : "Pause Session"}
      </button>

      <button
        onClick={handleEndSession}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-700/80 bg-[#10171d] py-3.5 font-bold text-[#ff8083] transition-colors hover:bg-gray-800"
      >
        <X className="h-5 w-5" />
        End Session
      </button>
    </div>
  )
}