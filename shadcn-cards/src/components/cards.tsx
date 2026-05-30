import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router"

export function CardFront() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-blue-700 text-white">
      Front
    </div>
  )
}

export function CardBack() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-emerald-700 text-white">
      Back
    </div>
  )
}

export function CardButtonContainer({
  showBack,
  onFlip,
}: {
  showBack: boolean
  onFlip: () => void
}) {
  return (
    <Button
      asChild
      variant={"ghost"}
      onClick={() => onFlip()}
      className="size-96 outline-none perspective-midrange"
    >
      <div
        className={cn(
          "relative size-full transition duration-500 transform-3d",
          showBack && "rotate-y-180"
        )}
      >
        <div className="absolute inset-0 size-full backface-hidden">
          <CardFront />
        </div>
        <div className="absolute inset-0 size-full rotate-y-180 backface-hidden">
          <CardBack />
        </div>
      </div>
    </Button>
  )
}

export function CardFlip() {
  const [showBack, setShowBack] = useState(false)
  const handleFlip = () => {
    setShowBack(!showBack)
  }

  return <CardButtonContainer showBack={showBack} onFlip={handleFlip} />
}

export function CardImage({
  cards,
}: {
  cards: {
    featured: string
    url: string
    title: string
    description: string
    urlTo: string
  }[]
}) {
  return (
    <>
      {cards.map((card) => (
          <Card
            key={card.title}
            className="relative mx-auto flex h-full w-full max-w-sm flex-col pt-0"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
            <img
              src={card.url}
              alt="Exercise cover"
              className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-90"
            />
            <CardHeader className="flex-1">
              <CardAction>
                <Badge variant="secondary">{card.featured}</Badge>
              </CardAction>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardFooter>
               <Button asChild className="w-full">
                <Link to={card.urlTo}>Start</Link>
               </Button>
            </CardFooter>
          </Card>
      ))}
    </>
  )
}
