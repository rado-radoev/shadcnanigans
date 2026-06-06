"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Wind } from "lucide-react";

const Page = () => {
  const [breaths, setBreaths] = useState(30);

  return (
    <div className="text-white">
      <h1>Session Setup</h1>
      <h4>Customize your practice environment</h4>

      <Card className="border-0 bg-slate-800/60 ring-slate-700/50">
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <Wind className="size-4" />
            Number of Breaths
          </div>
          <div className="flex items-center gap-8">
            <Button
              variant="outline"
              size="icon-lg"
              className="size-12 rounded-full border-slate-600 bg-transparent text-slate-400 hover:bg-slate-700 hover:text-white"
              onClick={() => setBreaths((b) => Math.max(1, b - 1))}
            >
              <Minus className="size-5" />
            </Button>
            <span className="min-w-[80px] text-center text-6xl font-bold text-emerald-400">
              {breaths}
            </span>
            <Button
              variant="outline"
              size="icon-lg"
              className="size-12 rounded-full border-slate-600 bg-transparent text-slate-400 hover:bg-slate-700 hover:text-white"
              onClick={() => setBreaths((b) => b + 1)}
            >
              <Plus className="size-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;