"use client";

import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import clsx from "clsx";

interface ClickableCardProps {
  title?: string;
  description?: string;
  content: string;
  onClick?: () => void;
  className?: string;
}

export function ClickableCard({
  title,
  description,
  content,
  onClick,
  className,
}: ClickableCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 active:scale-[0.98] group"
    >
      <CardHeader>
        {title ?? (
          <CardTitle className="flex items-center justify-between">
            {title}
            <ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </CardTitle>
        )}
        {description ?? <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
}
