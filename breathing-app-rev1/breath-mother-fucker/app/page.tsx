"use client";

import { ClickableCard } from "@/components/clikable-card";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Clock, Timer, TimerReset } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleOnClick = (e: string) => {
    console.log(e);
  };

  return (
    <main>
      <div className="items-center justify-center flex flex-col">
        {/* TITLE SECTION */}
        <div className="text-7xl">
          <h1>Inhale peace</h1>
          <h1 className="text-gray-400">Exhale tension</h1>
        </div>
        {/*  QUICK STATS + EXERCISES */}
        <div className="grid grid-cols-3 gap-4">
          {/* QUICK STATS */}
          <Card className="w-3xs h-32 flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle>
                <Clock />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>45 min</p>
              <p>total time</p>
            </CardContent>
          </Card>

          <Card className="w-3xs h-32 flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle>
                <Timer />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>2:30</p>
              <p>Longetst hold</p>
            </CardContent>
          </Card>

          <Card className="w-3xs h-32 flex flex-col justify-center items-center">
            <CardHeader>
              <CardTitle>
                <TimerReset />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>1:45</p>
              <p>Avg hold</p>
            </CardContent>
          </Card>

          {/* EXERCISES */}
          <ClickableCard
            className="h-6"
            content="Breathing"
            onClick={() => handleOnClick}
          />
          <ClickableCard
            content="Cold Plunge"
            onClick={() => handleOnClick("cold_plunge")}
          />
          <ClickableCard
            content="Cold Shower"
            onClick={() => handleOnClick("cold_shower")}
          />
          <ClickableCard
            content="Pushups"
            onClick={() => handleOnClick("pushups")}
          />
          <ClickableCard
            content="Plank"
            onClick={() => handleOnClick("plank")}
          />
          <ClickableCard
            content="Sauna"
            onClick={() => handleOnClick("sauna")}
          />
        </div>
      </div>
    </main>
  );
}
